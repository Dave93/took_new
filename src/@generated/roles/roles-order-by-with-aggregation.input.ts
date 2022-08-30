import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { rolesCountOrderByAggregateInput } from './roles-count-order-by-aggregate.input';
import { rolesMaxOrderByAggregateInput } from './roles-max-order-by-aggregate.input';
import { rolesMinOrderByAggregateInput } from './roles-min-order-by-aggregate.input';

@InputType()
export class rolesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    active?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_by?: keyof typeof SortOrder;

    @Field(() => rolesCountOrderByAggregateInput, {nullable:true})
    _count?: rolesCountOrderByAggregateInput;

    @Field(() => rolesMaxOrderByAggregateInput, {nullable:true})
    _max?: rolesMaxOrderByAggregateInput;

    @Field(() => rolesMinOrderByAggregateInput, {nullable:true})
    _min?: rolesMinOrderByAggregateInput;
}
