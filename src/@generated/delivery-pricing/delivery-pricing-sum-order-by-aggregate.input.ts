import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class delivery_pricingSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    min_price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price_per_km?: keyof typeof SortOrder;
}
