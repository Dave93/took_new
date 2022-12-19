import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { customers_commentsCountOrderByAggregateInput } from './customers-comments-count-order-by-aggregate.input';
import { customers_commentsMaxOrderByAggregateInput } from './customers-comments-max-order-by-aggregate.input';
import { customers_commentsMinOrderByAggregateInput } from './customers-comments-min-order-by-aggregate.input';

@InputType()
export class customers_commentsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    customer_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    comment?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    voice_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    image_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => customers_commentsCountOrderByAggregateInput, {nullable:true})
    _count?: customers_commentsCountOrderByAggregateInput;

    @Field(() => customers_commentsMaxOrderByAggregateInput, {nullable:true})
    _max?: customers_commentsMaxOrderByAggregateInput;

    @Field(() => customers_commentsMinOrderByAggregateInput, {nullable:true})
    _min?: customers_commentsMinOrderByAggregateInput;
}
