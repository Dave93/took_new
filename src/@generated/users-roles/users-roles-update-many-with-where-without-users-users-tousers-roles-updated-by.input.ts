import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_rolesScalarWhereInput } from './users-roles-scalar-where.input';
import { Type } from 'class-transformer';
import { users_rolesUncheckedUpdateManyWithoutUsers_roles_usersTousers_roles_updated_byInput } from './users-roles-unchecked-update-many-without-users-roles-users-tousers-roles-updated-by.input';

@InputType()
export class users_rolesUpdateManyWithWhereWithoutUsers_usersTousers_roles_updated_byInput {

    @Field(() => users_rolesScalarWhereInput, {nullable:false})
    @Type(() => users_rolesScalarWhereInput)
    where!: users_rolesScalarWhereInput;

    @Field(() => users_rolesUncheckedUpdateManyWithoutUsers_roles_usersTousers_roles_updated_byInput, {nullable:false})
    @Type(() => users_rolesUncheckedUpdateManyWithoutUsers_roles_usersTousers_roles_updated_byInput)
    data!: users_rolesUncheckedUpdateManyWithoutUsers_roles_usersTousers_roles_updated_byInput;
}
