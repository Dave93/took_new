import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { users } from 'src/@generated/users/users.model';
import { usersCreateArgs } from 'src/helpers/create-one.args';
import { PrismaAggregateCount } from '@common/dtos/prisma-aggregate-count';
import { usersWhereInput } from 'src/@generated/users/users-where.input';
import { FindManyusersArgs } from 'src/@generated/users/find-manyusers.args';
import { UpdateOneusersArgs } from 'src/@generated/users/update-oneusers.args';
import { CurrentUser, JwtAuthGuard, Permissions } from '@auth';
import { CouriersLocation, UserProfileNumbers } from '@modules/users/entities/user.entity';
import { UseGuards } from '@nestjs/common';
import { LoginResponseDto } from '@modules/auth/dto';
import { manager_withdraw } from '../../@generated/manager-withdraw/manager-withdraw.model';
import { manager_withdraw_transactions } from '../../@generated/manager-withdraw-transactions/manager-withdraw-transactions.model';

@Resolver(() => users)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => users)
  @Permissions('users.create')
  userCreate(@Args() createUserInput: usersCreateArgs) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => PrismaAggregateCount, { name: 'usersConnection' })
  @Permissions('users.list')
  usersConnection(@Args('where') where: usersWhereInput) {
    return this.usersService.usersConnection(where);
  }

  @Query(() => [users], { name: 'users' })
  @Permissions('users.list')
  findAll(@Args() params: FindManyusersArgs) {
    return this.usersService.findAll(params);
  }

  @Query(() => users, { name: 'user' })
  @Permissions('users.show')
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => users)
  @Permissions('users.edit')
  updateUser(@Args() updateUserInput: UpdateOneusersArgs) {
    return this.usersService.update(updateUserInput);
  }

  @Mutation(() => users)
  @Permissions('users.delete')
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.remove(id);
  }

  @Query(() => UserProfileNumbers, { name: 'getMyProfileNumbers' })
  @UseGuards(JwtAuthGuard)
  getMyProfileNumbers(@CurrentUser() user: users) {
    return this.usersService.getMyProfileNumbers(user);
  }

  @Query(() => [users], { name: 'myCouriers' })
  @UseGuards(JwtAuthGuard)
  myCouriers(@CurrentUser() user: users) {
    return this.usersService.myCouriers(user);
  }
  @Query(() => [CouriersLocation], { name: 'couriersLocation' })
  @UseGuards(JwtAuthGuard)
  couriersLocation(@CurrentUser() user: users) {
    return this.usersService.couriersLocation(user);
  }

  @Mutation(() => LoginResponseDto, { nullable: true })
  @UseGuards(JwtAuthGuard)
  async reloadUserData(@CurrentUser() user: users): Promise<LoginResponseDto> {
    const result = await this.usersService.reloadUserData(user);
    return result;
  }

  @Query(() => [manager_withdraw], { name: 'getCourierWithdraws' })
  @Permissions('users.show')
  async getCourierWithdraws(
    @Args('startDate', { type: () => Date }) startDate: Date,
    @Args('endDate', { type: () => Date }) endDate: Date,
    @Args('courierId') courierId: string,
  ) {
    return this.usersService.getCourierWithdraws(startDate, endDate, courierId);
  }

  @Query(() => [manager_withdraw_transactions], { name: 'getCourierWithdrawTransactions' })
  @Permissions('users.show')
  async getCourierWithdrawTransactions(@Args('withdrawId', { type: () => String }) withdrawId: string) {
    return this.usersService.getCourierWithdrawTransactions(withdrawId);
  }
}
