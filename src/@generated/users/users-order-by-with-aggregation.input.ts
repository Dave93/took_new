import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { usersCountOrderByAggregateInput } from './users-count-order-by-aggregate.input';
import { usersAvgOrderByAggregateInput } from './users-avg-order-by-aggregate.input';
import { usersMaxOrderByAggregateInput } from './users-max-order-by-aggregate.input';
import { usersMinOrderByAggregateInput } from './users-min-order-by-aggregate.input';
import { usersSumOrderByAggregateInput } from './users-sum-order-by-aggregate.input';

@InputType()
export class usersOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    first_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    last_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_super_user?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    drive_type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    card_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    card_number?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    birth_date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    car_model?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    car_number?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_online?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    latitude?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    longitude?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => usersCountOrderByAggregateInput, {nullable:true})
    _count?: usersCountOrderByAggregateInput;

    @Field(() => usersAvgOrderByAggregateInput, {nullable:true})
    _avg?: usersAvgOrderByAggregateInput;

    @Field(() => usersMaxOrderByAggregateInput, {nullable:true})
    _max?: usersMaxOrderByAggregateInput;

    @Field(() => usersMinOrderByAggregateInput, {nullable:true})
    _min?: usersMinOrderByAggregateInput;

    @Field(() => usersSumOrderByAggregateInput, {nullable:true})
    _sum?: usersSumOrderByAggregateInput;
}
