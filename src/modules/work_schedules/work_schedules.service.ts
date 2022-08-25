import { CacheControlService } from '@modules/cache_control/cache_control.service';
import { Injectable } from '@nestjs/common';
import { FindManyworkSchedulesArgs } from 'src/@generated/prisma/find-manywork-schedules.args';
import { UpdateOneworkSchedulesArgs } from 'src/@generated/prisma/update-onework-schedules.args';
import { work_schedulesWhereInput } from 'src/@generated/work-schedules/work-schedules-where.input';
import { work_schedulesCreateArgs } from 'src/helpers/create-one.args';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class WorkSchedulesService {
  constructor(private readonly prismaService: PrismaService, private readonly cacheControl: CacheControlService) {}
  async create(createWorkScheduleInput: work_schedulesCreateArgs) {
    let rest = await this.prismaService.work_schedules.create(createWorkScheduleInput);
    await this.cacheControl.cacheWorkSchedules();
    return rest;
  }

  workSchedulesConnection(where: work_schedulesWhereInput) {
    return this.prismaService.work_schedules.aggregate({
      _count: {
        id: true,
      },
      where,
    });
  }

  findAll(params: FindManyworkSchedulesArgs) {
    return this.prismaService.work_schedules.findMany({
      ...params,
      include: {
        organization: true,
      },
    });
  }

  findOne(id: string) {
    return this.prismaService.work_schedules.findUnique({
      where: {
        id,
      },
    });
  }

  async update(updateWorkScheduleInput: UpdateOneworkSchedulesArgs) {
    let res = await this.prismaService.work_schedules.update(updateWorkScheduleInput);
    await this.cacheControl.cacheWorkSchedules();
    return res;
  }

  remove(id: number) {
    return `This action removes a #${id} workSchedule`;
  }
}
