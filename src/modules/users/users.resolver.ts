import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { users } from 'src/@generated/users/users.model';
import { usersCreateArgs } from 'src/helpers/create-one.args';
import { PrismaAggregateCount } from '@common/dtos/prisma-aggregate-count';
import { usersWhereInput } from 'src/@generated/users/users-where.input';
import { FindManyusersArgs } from 'src/@generated/users/find-manyusers.args';
import { UpdateOneusersArgs } from 'src/@generated/users/update-oneusers.args';

@Resolver(() => users)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => users)
  userCreate(@Args() createUserInput: usersCreateArgs) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => PrismaAggregateCount, { name: 'usersConnection' })
  usersConnection(@Args('where') where: usersWhereInput) {
    return this.usersService.usersConnection(where);
  }

  @Query(() => [users], { name: 'users' })
  findAll(@Args() params: FindManyusersArgs) {
    return this.usersService.findAll(params);
  }

  @Query(() => users, { name: 'user' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => users)
  updateUser(@Args() updateUserInput: UpdateOneusersArgs) {
    return this.usersService.update(updateUserInput);
  }

  @Mutation(() => users)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.remove(id);
  }
}
