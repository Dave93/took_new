import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { rolesWhereUniqueInput } from './roles-where-unique.input';
import { Type } from 'class-transformer';
import { rolesCreateWithoutRoles_permissionsInput } from './roles-create-without-roles-permissions.input';

@InputType()
export class rolesCreateOrConnectWithoutRoles_permissionsInput {

    @Field(() => rolesWhereUniqueInput, {nullable:false})
    @Type(() => rolesWhereUniqueInput)
    where!: rolesWhereUniqueInput;

    @Field(() => rolesCreateWithoutRoles_permissionsInput, {nullable:false})
    @Type(() => rolesCreateWithoutRoles_permissionsInput)
    create!: rolesCreateWithoutRoles_permissionsInput;
}
