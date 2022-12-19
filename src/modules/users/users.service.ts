import { BadRequestException, Injectable } from '@nestjs/common';
import { FindManyusersArgs } from 'src/@generated/users/find-manyusers.args';
import { UpdateOneusersArgs } from 'src/@generated/users/update-oneusers.args';
import { usersWhereInput } from 'src/@generated/users/users-where.input';
import { usersCreateArgs } from 'src/helpers/create-one.args';
import { PrismaService } from 'src/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { user_status, users } from '@prisma/client';
import { SearchService } from '@modules/search/search.service';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService, private readonly searchService: SearchService) {}
  create(createUserInput: usersCreateArgs) {
    return this.prismaService.users.create(createUserInput);
  }

  usersConnection(where: usersWhereInput) {
    return this.prismaService.users.aggregate({
      _count: {
        id: true,
      },
      where,
    });
  }

  findAll(params: FindManyusersArgs) {
    return this.prismaService.users.findMany({
      ...params,
      include: {
        users_terminals: {
          include: {
            terminals: true,
          },
        },
        users_roles_usersTousers_roles_user_id: {
          include: {
            roles: true,
          },
        },
      },
    });
  }

  async findOne(id: string) {
    let res = await this.prismaService.users.findUnique({
      where: {
        id,
      },
      include: {
        users_terminals: {
          include: {
            terminals: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
        users_work_schedules: {
          include: {
            work_schedules: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
        users_roles_usersTousers_roles_user_id: {
          include: {
            roles: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });

    return res;
  }

  update(updateUserInput: UpdateOneusersArgs) {
    return this.prismaService.users.update(updateUserInput);
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async getMyProfileNumbers(user: users) {
    const userData = await this.prismaService.users.findUnique({
      where: {
        id: user.id,
      },
      select: {
        wallet_balance: true,
      },
    });

    const userScore = await this.searchService.getCourierScore(user.id);

    return {
      score: +userScore.toFixed(2),
      wallet: userData.wallet_balance,
    };
  }

  async myCouriers(user: users) {
    const currentUser = await this.prismaService.users.findUnique({
      where: {
        id: user.id,
      },
      select: {
        status: true,
        users_roles_usersTousers_roles_user_id: {
          select: {
            roles: {
              select: {
                code: true,
              },
            },
          },
        },
        users_terminals: {
          select: {
            terminal_id: true,
          },
        },
      },
    });

    if (!currentUser) {
      return new BadRequestException('User not found');
    }

    if (currentUser.status != user_status.active) {
      return new BadRequestException('User is not active');
    }

    if (currentUser.users_roles_usersTousers_roles_user_id.length == 0) {
      return new BadRequestException('User has no roles');
    }

    const managerRole = currentUser.users_roles_usersTousers_roles_user_id.find((role) => role.roles.code == 'manager');

    if (!managerRole) {
      return new BadRequestException('User is not a manager');
    }

    const couriers = await this.prismaService.users.findMany({
      where: {
        users_terminals: {
          some: {
            terminal_id: {
              in: currentUser.users_terminals.map((terminal) => terminal.terminal_id),
            },
          },
        },
        users_roles_usersTousers_roles_user_id: {
          some: {
            roles: {
              code: 'courier',
            },
          },
        },
        status: user_status.active,
        is_online: true,
      },
    });

    return couriers;
  }
}
