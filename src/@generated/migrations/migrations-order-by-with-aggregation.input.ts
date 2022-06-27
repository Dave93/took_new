import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { migrationsCountOrderByAggregateInput } from './migrations-count-order-by-aggregate.input';
import { migrationsAvgOrderByAggregateInput } from './migrations-avg-order-by-aggregate.input';
import { migrationsMaxOrderByAggregateInput } from './migrations-max-order-by-aggregate.input';
import { migrationsMinOrderByAggregateInput } from './migrations-min-order-by-aggregate.input';
import { migrationsSumOrderByAggregateInput } from './migrations-sum-order-by-aggregate.input';

@InputType()
export class migrationsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    timestamp?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => migrationsCountOrderByAggregateInput, {nullable:true})
    _count?: migrationsCountOrderByAggregateInput;

    @Field(() => migrationsAvgOrderByAggregateInput, {nullable:true})
    _avg?: migrationsAvgOrderByAggregateInput;

    @Field(() => migrationsMaxOrderByAggregateInput, {nullable:true})
    _max?: migrationsMaxOrderByAggregateInput;

    @Field(() => migrationsMinOrderByAggregateInput, {nullable:true})
    _min?: migrationsMinOrderByAggregateInput;

    @Field(() => migrationsSumOrderByAggregateInput, {nullable:true})
    _sum?: migrationsSumOrderByAggregateInput;
}
