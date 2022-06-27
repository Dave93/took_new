import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_rolesWhereUniqueInput } from './users-roles-where-unique.input';
import { Type } from 'class-transformer';
import { users_rolesUpdateWithoutRolesInput } from './users-roles-update-without-roles.input';
import { users_rolesCreateWithoutRolesInput } from './users-roles-create-without-roles.input';

@InputType()
export class users_rolesUpsertWithWhereUniqueWithoutRolesInput {

    @Field(() => users_rolesWhereUniqueInput, {nullable:false})
    @Type(() => users_rolesWhereUniqueInput)
    where!: users_rolesWhereUniqueInput;

    @Field(() => users_rolesUpdateWithoutRolesInput, {nullable:false})
    @Type(() => users_rolesUpdateWithoutRolesInput)
    update!: users_rolesUpdateWithoutRolesInput;

    @Field(() => users_rolesCreateWithoutRolesInput, {nullable:false})
    @Type(() => users_rolesCreateWithoutRolesInput)
    create!: users_rolesCreateWithoutRolesInput;
}
