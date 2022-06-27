import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_rolesCreateManyUsers_usersTousers_roles_user_idInput } from './users-roles-create-many-users-users-tousers-roles-user-id.input';
import { Type } from 'class-transformer';

@InputType()
export class users_rolesCreateManyUsers_usersTousers_roles_user_idInputEnvelope {

    @Field(() => [users_rolesCreateManyUsers_usersTousers_roles_user_idInput], {nullable:false})
    @Type(() => users_rolesCreateManyUsers_usersTousers_roles_user_idInput)
    data!: Array<users_rolesCreateManyUsers_usersTousers_roles_user_idInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
