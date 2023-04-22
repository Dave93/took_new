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
import { UserResponseDto } from '@modules/auth/dto/user-response.dto';
import { user_status as userStatus } from 'src/@generated/prisma/user-status.enum';
import { JwtPayload } from '@modules/auth/dto';
import { TokenService } from '@auth';

@Injectable()
export class UsersService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly searchService: SearchService,
    private tokenService: TokenService,
  ) {}
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
        users_work_schedules: {
          include: {
            work_schedules: true,
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
    try {
      return this.prismaService.users.update(updateUserInput);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
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

  async couriersLocation(user: users) {
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

    const rolesCode = currentUser.users_roles_usersTousers_roles_user_id.map((role) => role.roles.code);

    if (
      !rolesCode.includes('manager') &&
      !rolesCode.includes('admin') &&
      !rolesCode.includes('operator') &&
      !rolesCode.includes('super_admin')
    ) {
      return new BadRequestException('User has no permission');
    }

    const where = {
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
    };

    if (rolesCode.includes('admin') || rolesCode.includes('operator') || rolesCode.includes('super_admin')) {
      delete where.users_terminals;
    }

    let result = [];

    const couriers = await this.prismaService.users.findMany({
      where,
      select: {
        id: true,
        first_name: true,
        last_name: true,
        phone: true,
        is_online: true,
        latitude: true,
        longitude: true,
      },
    });

    result = couriers.map((courier) => {
      return {
        ...courier,
        // make initials from first and last name
        short_name: courier.first_name[0] + '. ' + courier.last_name[0] + '.',
      };
    });

    return result;
  }

  async reloadUserData(user: users) {
    const userData = await this.prismaService.users.findUnique({
      where: {
        id: user.id,
      },
      select: {
        id: true,
        first_name: true,
        last_name: true,
        phone: true,
        status: true,
        is_super_user: true,
        is_online: true,
        wallet_balance: true,
      },
    });
    // find user terminals
    const terminals = await this.prismaService.users_terminals.findMany({
      where: {
        user_id: user.id,
      },
      select: {
        terminal_id: true,
      },
    });

    const dto = new UserResponseDto();

    dto.id = userData.id;
    dto.first_name = userData.first_name;
    dto.last_name = userData.last_name;
    dto.phone = userData.phone;
    dto.status = userStatus[userData.status];
    dto.is_super_user = userData.is_super_user;
    dto.is_online = userData.is_online;
    dto.wallet_balance = userData.wallet_balance;
    dto.terminal_id = terminals.map((terminal) => terminal.terminal_id);

    const payload: JwtPayload = { id: user.id, phone: user.phone };
    const token = await this.tokenService.generateAuthToken(payload);
    const permissions = await this.prismaService.users_permissions.findMany({
      where: {
        user_id: user.id,
      },
      include: {
        permissions: true,
      },
    });
    let additionalPermissions = permissions.map(({ permissions: { slug } }) => slug);
    const userRoles = await this.prismaService.users_roles.findMany({
      where: {
        user_id: user.id,
      },
      include: {
        roles: {
          include: {
            roles_permissions: {
              include: {
                permissions: true,
              },
            },
          },
        },
      },
    });
    const rolePermissions = [];
    userRoles.map(({ roles: { roles_permissions } }) => {
      roles_permissions.map(({ permissions: { slug } }) => {
        rolePermissions.push(slug);
      });
    });
    additionalPermissions = [...additionalPermissions, ...rolePermissions];
    return {
      token,
      user: dto,
      access: {
        additionalPermissions: additionalPermissions,
        roles: userRoles.map(({ roles: { name, code, active } }) => ({ name, code, active })),
      },
    };
  }

  getCourierWithdraws(startDate: Date, endDate: Date, courierId: string) {
    return this.prismaService.manager_withdraw.findMany({
      where: {
        courier_id: courierId,
        created_at: {
          gte: startDate,
          lte: endDate,
        },
      },
      include: {
        manager_withdraw_managers: {
          select: {
            first_name: true,
            last_name: true,
          },
        },
        manager_withdraw_terminals: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        created_at: 'desc',
      },
    });
  }

  getCourierWithdrawTransactions(withdrawId: string) {
    return this.prismaService.manager_withdraw_transactions.findMany({
      where: {
        withdraw_id: withdrawId,
      },
      include: {
        manager_withdraw_transactions_transaction: {
          select: {
            id: true,
            created_at: true,
            order_transactions_orders: {
              select: {
                order_number: true,
                delivery_price: true,
                created_at: true,
              },
            },
          },
        },
      },
    });
  }
}
