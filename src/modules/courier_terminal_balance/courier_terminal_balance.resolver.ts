import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CourierTerminalBalanceService } from './courier_terminal_balance.service';
import { CourierTerminalBalance } from './entities/courier_terminal_balance.entity';
import { CreateCourierTerminalBalanceInput } from './dto/create-courier_terminal_balance.input';
import { UpdateCourierTerminalBalanceInput } from './dto/update-courier_terminal_balance.input';
import { UseGuards } from '@nestjs/common';
import { CurrentUser, JwtAuthGuard } from '@auth';
import { users } from '../../@generated/users/users.model';
import { courier_terminal_balance } from '../../@generated/courier-terminal-balance/courier-terminal-balance.model';
import { ManagerCouriersBalance } from '@modules/courier_terminal_balance/dto/manager_couriers_balance';

@Resolver(() => CourierTerminalBalance)
export class CourierTerminalBalanceResolver {
  constructor(private readonly courierTerminalBalanceService: CourierTerminalBalanceService) {}

  @Query(() => Int, { name: 'getMyTotalBalance' })
  @UseGuards(JwtAuthGuard)
  async getMyTotalBalance(@CurrentUser() user: users) {
    return this.courierTerminalBalanceService.getMyTotalBalance(user);
  }

  @Query(() => [courier_terminal_balance], { name: 'myBalanceByTerminal' })
  @UseGuards(JwtAuthGuard)
  async myBalanceByTerminal(@CurrentUser() user: users) {
    return this.courierTerminalBalanceService.myBalanceByTerminal(user);
  }

  @Query(() => [ManagerCouriersBalance], { name: 'managerCouriersBalance' })
  @UseGuards(JwtAuthGuard)
  async managerCouriersBalance(@CurrentUser() user: users) {
    return this.courierTerminalBalanceService.managerCouriersBalance(user);
  }

  @Mutation(() => courier_terminal_balance)
  @UseGuards(JwtAuthGuard)
  withdrawCourierBalance(
    @CurrentUser() user: users,
    @Args('amount', { type: () => Int }) amount: number,
    @Args('courier_id', { type: () => String }) courier_id: string,
    @Args('terminal_id', { type: () => String }) terminal_id: string,
  ) {
    return this.courierTerminalBalanceService.withdrawCourierBalance(user, amount, courier_id, terminal_id);
  }
}
