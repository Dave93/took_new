import { CacheControlService } from '@modules/cache_control/cache_control.service';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import axios from 'axios';
import { FindManyterminalsArgs } from 'src/@generated/terminals/find-manyterminals.args';
import { terminalsWhereInput } from 'src/@generated/terminals/terminals-where.input';
import { UpdateOneterminalsArgs } from 'src/@generated/terminals/update-oneterminals.args';
import { terminalsCreateArgs } from 'src/helpers/create-one.args';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TerminalsService implements OnModuleInit {
  constructor(private readonly prismaService: PrismaService, private readonly cacheControl: CacheControlService) {}

  async onModuleInit() {
    await this.getAllTerminalsFromIiko();
  }

  async create(createTerminalInput: terminalsCreateArgs) {
    let res = await this.prismaService.terminals.create(createTerminalInput);
    await this.cacheControl.cacheTerminals();
    return res;
  }

  terminalConnection(where: terminalsWhereInput) {
    return this.prismaService.terminals.aggregate({
      _count: {
        id: true,
      },
      where,
    });
  }

  findAll(params: FindManyterminalsArgs) {
    return this.prismaService.terminals.findMany({
      ...params,
      include: {
        organization: true,
      },
    });
  }

  findOne(id: string) {
    return this.prismaService.terminals.findUnique({
      where: {
        id,
      },
    });
  }

  async update(updateTerminalInput: UpdateOneterminalsArgs) {
    let res = await this.prismaService.terminals.update(updateTerminalInput);
    await this.cacheControl.cacheTerminals();
    return res;
  }

  remove(id: number) {
    return `This action removes a #${id} terminal`;
  }

  @Cron('* * */10 * * *')
  async getAllTerminalsFromIiko() {
    let organizations = await this.prismaService.organization.findMany({
      select: {
        id: true,
        iiko_login: true,
        external_id: true,
      },
    });

    let iikoUrl = 'https://api-ru.iiko.services/api/1/';
    organizations.forEach(async (organization) => {
      const {
        data: { token },
      } = await axios.post(`${iikoUrl}access_token`, {
        apiLogin: organization.iiko_login,
      });
      const { data } = await axios.post(
        `${iikoUrl}terminal_groups`,
        {
          organizationIds: [organization.external_id],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (data.terminalGroups && data.terminalGroups[0].items) {
        data.terminalGroups[0].items.forEach(async (terminal) => {
          await this.prismaService.terminals.upsert({
            where: {
              external_id: terminal.id,
            },
            create: {
              external_id: terminal.id,
              name: terminal.name,
              organization: {
                connect: {
                  id: organization.id,
                },
              },
            },
            update: {
              external_id: terminal.id,
            },
          });
        });
      }
    });

    let res = await this.prismaService.terminals.findMany({
      include: {
        organization: true,
      },
    });
    await this.cacheControl.cacheTerminals();
    return res;
  }
}
