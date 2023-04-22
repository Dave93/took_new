import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class delivery_pricingAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    min_price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price_per_km?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    customer_price_per_km?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    min_distance_km?: keyof typeof SortOrder;
}
