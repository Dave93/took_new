import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { roles_permissionsCountOrderByAggregateInput } from './roles-permissions-count-order-by-aggregate.input';
import { roles_permissionsMaxOrderByAggregateInput } from './roles-permissions-max-order-by-aggregate.input';
import { roles_permissionsMinOrderByAggregateInput } from './roles-permissions-min-order-by-aggregate.input';

@InputType()
export class roles_permissionsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    role_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    permission_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_by?: keyof typeof SortOrder;

    @Field(() => roles_permissionsCountOrderByAggregateInput, {nullable:true})
    _count?: roles_permissionsCountOrderByAggregateInput;

    @Field(() => roles_permissionsMaxOrderByAggregateInput, {nullable:true})
    _max?: roles_permissionsMaxOrderByAggregateInput;

    @Field(() => roles_permissionsMinOrderByAggregateInput, {nullable:true})
    _min?: roles_permissionsMinOrderByAggregateInput;
}
