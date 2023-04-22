import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DeliveryPricingService } from './delivery_pricing.service';
import { DeliveryPricing } from './entities/delivery_pricing.entity';
import { delivery_pricing } from 'src/@generated/delivery-pricing/delivery-pricing.model';
import { FindManydeliveryPricingArgs } from 'src/@generated/prisma/find-manydelivery-pricing.args';
import { PrismaAggregateCount } from '@common/dtos/prisma-aggregate-count';
import { delivery_pricingWhereInput } from 'src/@generated/delivery-pricing/delivery-pricing-where.input';
import { UpdateOnedeliveryPricingArgs } from 'src/@generated/prisma/update-onedelivery-pricing.args';
import { CreateOnedeliveryPricingArgs, delivery_pricingUpdateArgs } from 'src/helpers/create-one.args';
import { Permissions } from '@auth';

@Resolver(() => delivery_pricing)
export class DeliveryPricingResolver {
  constructor(private readonly deliveryPricingService: DeliveryPricingService) {}

  @Mutation(() => delivery_pricing)
  @Permissions('delivery_pricing.create')
  createDeliveryPricing(@Args() createDeliveryPricingInput: CreateOnedeliveryPricingArgs) {
    return this.deliveryPricingService.create(createDeliveryPricingInput);
  }

  @Query(() => [delivery_pricing], { name: 'deliveryPricings' })
  @Permissions('delivery_pricing.list')
  findAll(@Args() params: FindManydeliveryPricingArgs) {
    return this.deliveryPricingService.findAll(params);
  }

  @Query(() => PrismaAggregateCount, { name: 'deliveryPricingsConnection' })
  @Permissions('delivery_pricing.list')
  deliveryPricingConnection(@Args('where') where: delivery_pricingWhereInput) {
    return this.deliveryPricingService.deliveryPricingConnection(where);
  }

  @Query(() => delivery_pricing, { name: 'deliveryPricing' })
  @Permissions('delivery_pricing.show')
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.deliveryPricingService.findOne(id);
  }

  @Mutation(() => delivery_pricing)
  @Permissions('delivery_pricing.edit')
  updateDeliveryPricing(@Args() updateDeliveryPricingInput: delivery_pricingUpdateArgs) {
    return this.deliveryPricingService.update(updateDeliveryPricingInput);
  }

  @Mutation(() => delivery_pricing)
  @Permissions('delivery_pricing.delete')
  removeDeliveryPricing(@Args('id', { type: () => String }) id: string) {
    return this.deliveryPricingService.remove(id);
  }
}
