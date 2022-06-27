import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { permissionsWhereUniqueInput } from './permissions-where-unique.input';
import { Type } from 'class-transformer';
import { permissionsCreateWithoutUsers_permissionsInput } from './permissions-create-without-users-permissions.input';

@InputType()
export class permissionsCreateOrConnectWithoutUsers_permissionsInput {

    @Field(() => permissionsWhereUniqueInput, {nullable:false})
    @Type(() => permissionsWhereUniqueInput)
    where!: permissionsWhereUniqueInput;

    @Field(() => permissionsCreateWithoutUsers_permissionsInput, {nullable:false})
    @Type(() => permissionsCreateWithoutUsers_permissionsInput)
    create!: permissionsCreateWithoutUsers_permissionsInput;
}
