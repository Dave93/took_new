import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { users } from '../users/users.model';
import { permissions } from '../permissions/permissions.model';

@ObjectType()
export class users_permissions {

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => String, {nullable:false})
    permission_id!: string;

    @Field(() => String, {nullable:true})
    created_by!: string | null;

    @Field(() => String, {nullable:true})
    updated_by!: string | null;

    @Field(() => users, {nullable:true})
    users_usersTousers_permissions_created_by?: users | null;

    @Field(() => permissions, {nullable:false})
    permissions?: permissions;

    @Field(() => users, {nullable:true})
    users_usersTousers_permissions_updated_by?: users | null;

    @Field(() => users, {nullable:false})
    users_usersTousers_permissions_user_id?: users;
}
