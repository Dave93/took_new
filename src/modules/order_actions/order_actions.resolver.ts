import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrderActionsService } from './order_actions.service';
import { OrderAction } from './entities/order_action.entity';
import { CreateOrderActionInput } from './dto/create-order_action.input';
import { UpdateOrderActionInput } from './dto/update-order_action.input';
import { order_actions } from 'src/@generated/order-actions/order-actions.model';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@modules/auth';

@Resolver(() => OrderAction)
export class OrderActionsResolver {
  constructor(private readonly orderActionsService: OrderActionsService) {}

  // @Mutation(() => OrderAction)
  // createOrderAction(@Args('createOrderActionInput') createOrderActionInput: CreateOrderActionInput) {
  //   return this.orderActionsService.create(createOrderActionInput);
  // }

  // @Query(() => [OrderAction], { name: 'orderActions' })
  // findAll() {
  //   return this.orderActionsService.findAll();
  // }

  @Query(() => [order_actions], { name: 'findForOrder' })
  @UseGuards(JwtAuthGuard)
  findForOrder(@Args('orderId', { type: () => String }) id: string) {
    return this.orderActionsService.findForOrder(id);
  }

  // @Mutation(() => OrderAction)
  // updateOrderAction(@Args('updateOrderActionInput') updateOrderActionInput: UpdateOrderActionInput) {
  //   return this.orderActionsService.update(updateOrderActionInput.id, updateOrderActionInput);
  // }

  // @Mutation(() => OrderAction)
  // removeOrderAction(@Args('id', { type: () => Int }) id: number) {
  //   return this.orderActionsService.remove(id);
  // }
}
