import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DeliveryPricingService } from './delivery_pricing.service';
import { DeliveryPricing } from './entities/delivery_pricing.entity';
import { delivery_pricing } from 'src/@generated/delivery-pricing/delivery-pricing.model';
import { CreateOnedeliveryPricingArgs } from 'src/@generated/prisma/create-onedelivery-pricing.args';
import { FindManydeliveryPricingArgs } from 'src/@generated/prisma/find-manydelivery-pricing.args';
import { PrismaAggregateCount } from '@common/dtos/prisma-aggregate-count';
import { delivery_pricingWhereInput } from 'src/@generated/delivery-pricing/delivery-pricing-where.input';
import { UpdateOnedeliveryPricingArgs } from 'src/@generated/prisma/update-onedelivery-pricing.args';

@Resolver(() => delivery_pricing)
export class DeliveryPricingResolver {
  constructor(private readonly deliveryPricingService: DeliveryPricingService) {}

  @Mutation(() => delivery_pricing)
  createDeliveryPricing(@Args() createDeliveryPricingInput: CreateOnedeliveryPricingArgs) {
    return this.deliveryPricingService.create(createDeliveryPricingInput);
  }

  @Query(() => [delivery_pricing], { name: 'deliveryPricings' })
  findAll(@Args() params: FindManydeliveryPricingArgs) {
    return this.deliveryPricingService.findAll(params);
  }

  @Query(() => PrismaAggregateCount, { name: 'deliveryPricingConnection' })
  deliveryPricingConnection(@Args('where') where: delivery_pricingWhereInput) {
    return this.deliveryPricingService.deliveryPricingConnection(where);
  }

  @Query(() => delivery_pricing, { name: 'deliveryPricing' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.deliveryPricingService.findOne(id);
  }

  @Mutation(() => delivery_pricing)
  updateDeliveryPricing(@Args() updateDeliveryPricingInput: UpdateOnedeliveryPricingArgs) {
    return this.deliveryPricingService.update(updateDeliveryPricingInput);
  }

  @Mutation(() => delivery_pricing)
  removeDeliveryPricing(@Args('id', { type: () => String }) id: string) {
    return this.deliveryPricingService.remove(id);
  }
}
