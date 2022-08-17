import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { permissionsCountOrderByAggregateInput } from './permissions-count-order-by-aggregate.input';
import { permissionsMaxOrderByAggregateInput } from './permissions-max-order-by-aggregate.input';
import { permissionsMinOrderByAggregateInput } from './permissions-min-order-by-aggregate.input';

@InputType()
export class permissionsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

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

    @Field(() => permissionsCountOrderByAggregateInput, {nullable:true})
    _count?: permissionsCountOrderByAggregateInput;

    @Field(() => permissionsMaxOrderByAggregateInput, {nullable:true})
    _max?: permissionsMaxOrderByAggregateInput;

    @Field(() => permissionsMinOrderByAggregateInput, {nullable:true})
    _min?: permissionsMinOrderByAggregateInput;
}
