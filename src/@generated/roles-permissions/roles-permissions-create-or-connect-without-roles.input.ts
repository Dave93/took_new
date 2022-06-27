import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { roles_permissionsWhereUniqueInput } from './roles-permissions-where-unique.input';
import { Type } from 'class-transformer';
import { roles_permissionsCreateWithoutRolesInput } from './roles-permissions-create-without-roles.input';

@InputType()
export class roles_permissionsCreateOrConnectWithoutRolesInput {

    @Field(() => roles_permissionsWhereUniqueInput, {nullable:false})
    @Type(() => roles_permissionsWhereUniqueInput)
    where!: roles_permissionsWhereUniqueInput;

    @Field(() => roles_permissionsCreateWithoutRolesInput, {nullable:false})
    @Type(() => roles_permissionsCreateWithoutRolesInput)
    create!: roles_permissionsCreateWithoutRolesInput;
}
