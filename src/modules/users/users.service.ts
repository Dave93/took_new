import { Injectable } from '@nestjs/common';
import { FindManyusersArgs } from 'src/@generated/users/find-manyusers.args';
import { UpdateOneusersArgs } from 'src/@generated/users/update-oneusers.args';
import { usersWhereInput } from 'src/@generated/users/users-where.input';
import { usersCreateArgs } from 'src/helpers/create-one.args';
import { PrismaService } from 'src/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}
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

  findOne(id: string) {
    return this.prismaService.users.findUnique({
      where: {
        id,
      },
      include: {
        users_terminals: true,
        users_work_schedules: true,
        users_roles_usersTousers_roles_user_id: true,
      },
    });
  }

  update(updateUserInput: UpdateOneusersArgs) {
    return this.prismaService.users.update(updateUserInput);
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
