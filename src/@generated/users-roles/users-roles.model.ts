import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { users } from '../users/users.model';
import { roles } from '../roles/roles.model';

@ObjectType()
export class users_roles {

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => String, {nullable:false})
    role_id!: string;

    @Field(() => String, {nullable:true})
    created_by!: string | null;

    @Field(() => String, {nullable:true})
    updated_by!: string | null;

    @Field(() => users, {nullable:true})
    users_usersTousers_roles_created_by?: users | null;

    @Field(() => roles, {nullable:false})
    roles?: roles;

    @Field(() => users, {nullable:true})
    users_usersTousers_roles_updated_by?: users | null;

    @Field(() => users, {nullable:false})
    users_usersTousers_roles_user_id?: users;
}
