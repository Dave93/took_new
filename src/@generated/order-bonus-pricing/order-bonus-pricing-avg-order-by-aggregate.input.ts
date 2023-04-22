import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class order_bonus_pricingAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    min_distance_km?: keyof typeof SortOrder;
}
