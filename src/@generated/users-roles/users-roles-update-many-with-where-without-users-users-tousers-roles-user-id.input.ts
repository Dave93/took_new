import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_rolesScalarWhereInput } from './users-roles-scalar-where.input';
import { Type } from 'class-transformer';
import { users_rolesUncheckedUpdateManyWithoutUsers_roles_usersTousers_roles_user_idInput } from './users-roles-unchecked-update-many-without-users-roles-users-tousers-roles-user-id.input';

@InputType()
export class users_rolesUpdateManyWithWhereWithoutUsers_usersTousers_roles_user_idInput {

    @Field(() => users_rolesScalarWhereInput, {nullable:false})
    @Type(() => users_rolesScalarWhereInput)
    where!: users_rolesScalarWhereInput;

    @Field(() => users_rolesUncheckedUpdateManyWithoutUsers_roles_usersTousers_roles_user_idInput, {nullable:false})
    @Type(() => users_rolesUncheckedUpdateManyWithoutUsers_roles_usersTousers_roles_user_idInput)
    data!: users_rolesUncheckedUpdateManyWithoutUsers_roles_usersTousers_roles_user_idInput;
}
