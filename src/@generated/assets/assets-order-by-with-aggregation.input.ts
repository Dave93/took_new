import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { assetsCountOrderByAggregateInput } from './assets-count-order-by-aggregate.input';
import { assetsMaxOrderByAggregateInput } from './assets-max-order-by-aggregate.input';
import { assetsMinOrderByAggregateInput } from './assets-min-order-by-aggregate.input';

@InputType()
export class assetsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    model?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    file_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    model_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sub_folder?: keyof typeof SortOrder;

    @Field(() => assetsCountOrderByAggregateInput, {nullable:true})
    _count?: assetsCountOrderByAggregateInput;

    @Field(() => assetsMaxOrderByAggregateInput, {nullable:true})
    _max?: assetsMaxOrderByAggregateInput;

    @Field(() => assetsMinOrderByAggregateInput, {nullable:true})
    _min?: assetsMinOrderByAggregateInput;
}
