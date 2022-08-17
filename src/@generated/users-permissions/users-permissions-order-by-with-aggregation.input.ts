import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { users_permissionsCountOrderByAggregateInput } from './users-permissions-count-order-by-aggregate.input';
import { users_permissionsMaxOrderByAggregateInput } from './users-permissions-max-order-by-aggregate.input';
import { users_permissionsMinOrderByAggregateInput } from './users-permissions-min-order-by-aggregate.input';

@InputType()
export class users_permissionsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    permission_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_by?: keyof typeof SortOrder;

    @Field(() => users_permissionsCountOrderByAggregateInput, {nullable:true})
    _count?: users_permissionsCountOrderByAggregateInput;

    @Field(() => users_permissionsMaxOrderByAggregateInput, {nullable:true})
    _max?: users_permissionsMaxOrderByAggregateInput;

    @Field(() => users_permissionsMinOrderByAggregateInput, {nullable:true})
    _min?: users_permissionsMinOrderByAggregateInput;
}
