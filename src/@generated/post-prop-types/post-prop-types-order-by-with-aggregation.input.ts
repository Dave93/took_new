import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { post_prop_typesCountOrderByAggregateInput } from './post-prop-types-count-order-by-aggregate.input';
import { post_prop_typesMaxOrderByAggregateInput } from './post-prop-types-max-order-by-aggregate.input';
import { post_prop_typesMinOrderByAggregateInput } from './post-prop-types-min-order-by-aggregate.input';

@InputType()
export class post_prop_typesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sale_type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_by?: keyof typeof SortOrder;

    @Field(() => post_prop_typesCountOrderByAggregateInput, {nullable:true})
    _count?: post_prop_typesCountOrderByAggregateInput;

    @Field(() => post_prop_typesMaxOrderByAggregateInput, {nullable:true})
    _max?: post_prop_typesMaxOrderByAggregateInput;

    @Field(() => post_prop_typesMinOrderByAggregateInput, {nullable:true})
    _min?: post_prop_typesMinOrderByAggregateInput;
}
