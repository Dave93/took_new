import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_rolesWhereUniqueInput } from './users-roles-where-unique.input';
import { Type } from 'class-transformer';
import { users_rolesUpdateWithoutRolesInput } from './users-roles-update-without-roles.input';

@InputType()
export class users_rolesUpdateWithWhereUniqueWithoutRolesInput {

    @Field(() => users_rolesWhereUniqueInput, {nullable:false})
    @Type(() => users_rolesWhereUniqueInput)
    where!: users_rolesWhereUniqueInput;

    @Field(() => users_rolesUpdateWithoutRolesInput, {nullable:false})
    @Type(() => users_rolesUpdateWithoutRolesInput)
    data!: users_rolesUpdateWithoutRolesInput;
}
