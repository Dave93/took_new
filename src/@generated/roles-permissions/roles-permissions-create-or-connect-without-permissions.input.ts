import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { roles_permissionsWhereUniqueInput } from './roles-permissions-where-unique.input';
import { Type } from 'class-transformer';
import { roles_permissionsCreateWithoutPermissionsInput } from './roles-permissions-create-without-permissions.input';

@InputType()
export class roles_permissionsCreateOrConnectWithoutPermissionsInput {

    @Field(() => roles_permissionsWhereUniqueInput, {nullable:false})
    @Type(() => roles_permissionsWhereUniqueInput)
    where!: roles_permissionsWhereUniqueInput;

    @Field(() => roles_permissionsCreateWithoutPermissionsInput, {nullable:false})
    @Type(() => roles_permissionsCreateWithoutPermissionsInput)
    create!: roles_permissionsCreateWithoutPermissionsInput;
}
