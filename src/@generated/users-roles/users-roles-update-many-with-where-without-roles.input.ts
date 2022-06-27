import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_rolesScalarWhereInput } from './users-roles-scalar-where.input';
import { Type } from 'class-transformer';
import { users_rolesUncheckedUpdateManyWithoutUsers_rolesInput } from './users-roles-unchecked-update-many-without-users-roles.input';

@InputType()
export class users_rolesUpdateManyWithWhereWithoutRolesInput {

    @Field(() => users_rolesScalarWhereInput, {nullable:false})
    @Type(() => users_rolesScalarWhereInput)
    where!: users_rolesScalarWhereInput;

    @Field(() => users_rolesUncheckedUpdateManyWithoutUsers_rolesInput, {nullable:false})
    @Type(() => users_rolesUncheckedUpdateManyWithoutUsers_rolesInput)
    data!: users_rolesUncheckedUpdateManyWithoutUsers_rolesInput;
}
