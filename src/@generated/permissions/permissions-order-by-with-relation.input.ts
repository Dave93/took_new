import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { usersOrderByWithRelationInput } from '../users/users-order-by-with-relation.input';
import { roles_permissionsOrderByRelationAggregateInput } from '../roles-permissions/roles-permissions-order-by-relation-aggregate.input';
import { users_permissionsOrderByRelationAggregateInput } from '../users-permissions/users-permissions-order-by-relation-aggregate.input';

@InputType()
export class permissionsOrderByWithRelationInput {

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

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    users_permissions_created_byTousers?: usersOrderByWithRelationInput;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    users_permissions_updated_byTousers?: usersOrderByWithRelationInput;

    @Field(() => roles_permissionsOrderByRelationAggregateInput, {nullable:true})
    roles_permissions?: roles_permissionsOrderByRelationAggregateInput;

    @Field(() => users_permissionsOrderByRelationAggregateInput, {nullable:true})
    users_permissions?: users_permissionsOrderByRelationAggregateInput;
}
