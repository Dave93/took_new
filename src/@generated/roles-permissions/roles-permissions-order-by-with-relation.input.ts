import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { usersOrderByWithRelationInput } from '../users/users-order-by-with-relation.input';
import { permissionsOrderByWithRelationInput } from '../permissions/permissions-order-by-with-relation.input';
import { rolesOrderByWithRelationInput } from '../roles/roles-order-by-with-relation.input';

@InputType()
export class roles_permissionsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    role_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    permission_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_by?: keyof typeof SortOrder;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    users_roles_permissions_created_byTousers?: usersOrderByWithRelationInput;

    @Field(() => permissionsOrderByWithRelationInput, {nullable:true})
    permissions?: permissionsOrderByWithRelationInput;

    @Field(() => rolesOrderByWithRelationInput, {nullable:true})
    roles?: rolesOrderByWithRelationInput;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    users_roles_permissions_updated_byTousers?: usersOrderByWithRelationInput;
}
