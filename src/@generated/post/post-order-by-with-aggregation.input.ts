import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { postCountOrderByAggregateInput } from './post-count-order-by-aggregate.input';
import { postAvgOrderByAggregateInput } from './post-avg-order-by-aggregate.input';
import { postMaxOrderByAggregateInput } from './post-max-order-by-aggregate.input';
import { postMinOrderByAggregateInput } from './post-min-order-by-aggregate.input';
import { postSumOrderByAggregateInput } from './post-sum-order-by-aggregate.input';

@InputType()
export class postOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price_type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sale_type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    latitude?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    longitude?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    comments_count?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    city_id?: keyof typeof SortOrder;

    @Field(() => postCountOrderByAggregateInput, {nullable:true})
    _count?: postCountOrderByAggregateInput;

    @Field(() => postAvgOrderByAggregateInput, {nullable:true})
    _avg?: postAvgOrderByAggregateInput;

    @Field(() => postMaxOrderByAggregateInput, {nullable:true})
    _max?: postMaxOrderByAggregateInput;

    @Field(() => postMinOrderByAggregateInput, {nullable:true})
    _min?: postMinOrderByAggregateInput;

    @Field(() => postSumOrderByAggregateInput, {nullable:true})
    _sum?: postSumOrderByAggregateInput;
}
