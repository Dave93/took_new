import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { usersOrderByWithRelationInput } from '../users/users-order-by-with-relation.input';
import { roles_permissionsOrderByRelationAggregateInput } from '../roles-permissions/roles-permissions-order-by-relation-aggregate.input';
import { users_rolesOrderByRelationAggregateInput } from '../users-roles/users-roles-order-by-relation-aggregate.input';

@InputType()
export class rolesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

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
    users_roles_created_byTousers?: usersOrderByWithRelationInput;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    users_roles_updated_byTousers?: usersOrderByWithRelationInput;

    @Field(() => roles_permissionsOrderByRelationAggregateInput, {nullable:true})
    roles_permissions?: roles_permissionsOrderByRelationAggregateInput;

    @Field(() => users_rolesOrderByRelationAggregateInput, {nullable:true})
    users_roles?: users_rolesOrderByRelationAggregateInput;
}
