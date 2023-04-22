import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class order_bonus_pricingOrderByRelationAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}
