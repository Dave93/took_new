import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { customersCountOrderByAggregateInput } from './customers-count-order-by-aggregate.input';
import { customersMaxOrderByAggregateInput } from './customers-max-order-by-aggregate.input';
import { customersMinOrderByAggregateInput } from './customers-min-order-by-aggregate.input';

@InputType()
export class customersOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;

    @Field(() => customersCountOrderByAggregateInput, {nullable:true})
    _count?: customersCountOrderByAggregateInput;

    @Field(() => customersMaxOrderByAggregateInput, {nullable:true})
    _max?: customersMaxOrderByAggregateInput;

    @Field(() => customersMinOrderByAggregateInput, {nullable:true})
    _min?: customersMinOrderByAggregateInput;
}
