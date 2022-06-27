import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { users_rolesCountOrderByAggregateInput } from './users-roles-count-order-by-aggregate.input';
import { users_rolesAvgOrderByAggregateInput } from './users-roles-avg-order-by-aggregate.input';
import { users_rolesMaxOrderByAggregateInput } from './users-roles-max-order-by-aggregate.input';
import { users_rolesMinOrderByAggregateInput } from './users-roles-min-order-by-aggregate.input';
import { users_rolesSumOrderByAggregateInput } from './users-roles-sum-order-by-aggregate.input';

@InputType()
export class users_rolesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_by?: keyof typeof SortOrder;

    @Field(() => users_rolesCountOrderByAggregateInput, {nullable:true})
    _count?: users_rolesCountOrderByAggregateInput;

    @Field(() => users_rolesAvgOrderByAggregateInput, {nullable:true})
    _avg?: users_rolesAvgOrderByAggregateInput;

    @Field(() => users_rolesMaxOrderByAggregateInput, {nullable:true})
    _max?: users_rolesMaxOrderByAggregateInput;

    @Field(() => users_rolesMinOrderByAggregateInput, {nullable:true})
    _min?: users_rolesMinOrderByAggregateInput;

    @Field(() => users_rolesSumOrderByAggregateInput, {nullable:true})
    _sum?: users_rolesSumOrderByAggregateInput;
}
