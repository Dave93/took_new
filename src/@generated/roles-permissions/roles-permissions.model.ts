import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { users } from '../users/users.model';
import { permissions } from '../permissions/permissions.model';
import { roles } from '../roles/roles.model';

@ObjectType()
export class roles_permissions {

    @Field(() => Int, {nullable:false})
    role_id!: number;

    @Field(() => Int, {nullable:false})
    permission_id!: number;

    @Field(() => String, {nullable:true})
    created_by!: string | null;

    @Field(() => String, {nullable:true})
    updated_by!: string | null;

    @Field(() => users, {nullable:true})
    users_roles_permissions_created_byTousers?: users | null;

    @Field(() => permissions, {nullable:false})
    permissions?: permissions;

    @Field(() => roles, {nullable:false})
    roles?: roles;

    @Field(() => users, {nullable:true})
    users_roles_permissions_updated_byTousers?: users | null;
}
