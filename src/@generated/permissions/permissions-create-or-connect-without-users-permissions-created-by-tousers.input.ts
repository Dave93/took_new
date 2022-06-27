import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { permissionsWhereUniqueInput } from './permissions-where-unique.input';
import { Type } from 'class-transformer';
import { permissionsCreateWithoutUsers_permissions_created_byTousersInput } from './permissions-create-without-users-permissions-created-by-tousers.input';

@InputType()
export class permissionsCreateOrConnectWithoutUsers_permissions_created_byTousersInput {

    @Field(() => permissionsWhereUniqueInput, {nullable:false})
    @Type(() => permissionsWhereUniqueInput)
    where!: permissionsWhereUniqueInput;

    @Field(() => permissionsCreateWithoutUsers_permissions_created_byTousersInput, {nullable:false})
    @Type(() => permissionsCreateWithoutUsers_permissions_created_byTousersInput)
    create!: permissionsCreateWithoutUsers_permissions_created_byTousersInput;
}
