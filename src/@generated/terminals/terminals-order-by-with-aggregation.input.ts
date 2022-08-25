import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { terminalsCountOrderByAggregateInput } from './terminals-count-order-by-aggregate.input';
import { terminalsAvgOrderByAggregateInput } from './terminals-avg-order-by-aggregate.input';
import { terminalsMaxOrderByAggregateInput } from './terminals-max-order-by-aggregate.input';
import { terminalsMinOrderByAggregateInput } from './terminals-min-order-by-aggregate.input';
import { terminalsSumOrderByAggregateInput } from './terminals-sum-order-by-aggregate.input';

@InputType()
export class terminalsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    active?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    latitude?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    longitude?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    external_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    organization_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_by?: keyof typeof SortOrder;

    @Field(() => terminalsCountOrderByAggregateInput, {nullable:true})
    _count?: terminalsCountOrderByAggregateInput;

    @Field(() => terminalsAvgOrderByAggregateInput, {nullable:true})
    _avg?: terminalsAvgOrderByAggregateInput;

    @Field(() => terminalsMaxOrderByAggregateInput, {nullable:true})
    _max?: terminalsMaxOrderByAggregateInput;

    @Field(() => terminalsMinOrderByAggregateInput, {nullable:true})
    _min?: terminalsMinOrderByAggregateInput;

    @Field(() => terminalsSumOrderByAggregateInput, {nullable:true})
    _sum?: terminalsSumOrderByAggregateInput;
}
