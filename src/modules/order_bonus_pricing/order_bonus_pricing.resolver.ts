import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrderBonusPricingService } from './order_bonus_pricing.service';
import { OrderBonusPricing } from './entities/order_bonus_pricing.entity';
import { CreateOrderBonusPricingInput } from './dto/create-order_bonus_pricing.input';
import { UpdateOrderBonusPricingInput } from './dto/update-order_bonus_pricing.input';
import { Permissions } from '@auth';
import { CreateOneorderBonusPricingArgs, order_bonus_pricingUpdateArgs } from '../../helpers/create-one.args';
import { FindManyorderBonusPricingArgs } from '../../@generated/prisma/find-manyorder-bonus-pricing.args';
import { order_bonus_pricing } from '../../@generated/order-bonus-pricing/order-bonus-pricing.model';
import { PrismaAggregateCount } from '@common/dtos/prisma-aggregate-count';
import { delivery_pricingWhereInput } from '../../@generated/delivery-pricing/delivery-pricing-where.input';
import { order_bonus_pricingWhereInput } from '../../@generated/order-bonus-pricing/order-bonus-pricing-where.input';
import { order_bonus_pricingUpdateInput } from '../../@generated/order-bonus-pricing/order-bonus-pricing-update.input';

@Resolver(() => OrderBonusPricing)
export class OrderBonusPricingResolver {
  constructor(private readonly orderBonusPricingService: OrderBonusPricingService) {}

  @Mutation(() => order_bonus_pricing)
  @Permissions('order_bonus_pricing.create')
  orderBonusPricingCreate(@Args() createOrderBonusPricingInput: CreateOneorderBonusPricingArgs) {
    return this.orderBonusPricingService.create(createOrderBonusPricingInput);
  }

  @Query(() => [order_bonus_pricing], { name: 'orderBonusPricings' })
  @Permissions('order_bonus_pricing.list')
  findAll(@Args() params: FindManyorderBonusPricingArgs) {
    return this.orderBonusPricingService.findAll(params);
  }

  @Query(() => PrismaAggregateCount, { name: 'orderBonusPricingsConnection' })
  @Permissions('order_bonus_pricing.list')
  orderBonusPricingsConnection(@Args('where') where: order_bonus_pricingWhereInput) {
    return this.orderBonusPricingService.orderBonusPricingsConnection(where);
  }

  @Query(() => order_bonus_pricing, { name: 'orderBonusPricing' })
  @Permissions('order_bonus_pricing.show')
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.orderBonusPricingService.findOne(id);
  }

  @Mutation(() => order_bonus_pricing)
  @Permissions('order_bonus_pricing.edit')
  updateOrderBonusPricing(@Args() updateOrderBonusPricingInput: order_bonus_pricingUpdateArgs) {
    return this.orderBonusPricingService.update(updateOrderBonusPricingInput);
  }

  @Mutation(() => OrderBonusPricing)
  removeOrderBonusPricing(@Args('id', { type: () => Int }) id: number) {
    return this.orderBonusPricingService.remove(id);
  }
}
