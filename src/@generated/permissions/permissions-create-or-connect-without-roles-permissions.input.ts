import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { permissionsWhereUniqueInput } from './permissions-where-unique.input';
import { Type } from 'class-transformer';
import { permissionsCreateWithoutRoles_permissionsInput } from './permissions-create-without-roles-permissions.input';

@InputType()
export class permissionsCreateOrConnectWithoutRoles_permissionsInput {

    @Field(() => permissionsWhereUniqueInput, {nullable:false})
    @Type(() => permissionsWhereUniqueInput)
    where!: permissionsWhereUniqueInput;

    @Field(() => permissionsCreateWithoutRoles_permissionsInput, {nullable:false})
    @Type(() => permissionsCreateWithoutRoles_permissionsInput)
    create!: permissionsCreateWithoutRoles_permissionsInput;
}
