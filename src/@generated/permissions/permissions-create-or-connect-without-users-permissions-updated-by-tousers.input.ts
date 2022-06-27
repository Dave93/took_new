import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { permissionsWhereUniqueInput } from './permissions-where-unique.input';
import { Type } from 'class-transformer';
import { permissionsCreateWithoutUsers_permissions_updated_byTousersInput } from './permissions-create-without-users-permissions-updated-by-tousers.input';

@InputType()
export class permissionsCreateOrConnectWithoutUsers_permissions_updated_byTousersInput {

    @Field(() => permissionsWhereUniqueInput, {nullable:false})
    @Type(() => permissionsWhereUniqueInput)
    where!: permissionsWhereUniqueInput;

    @Field(() => permissionsCreateWithoutUsers_permissions_updated_byTousersInput, {nullable:false})
    @Type(() => permissionsCreateWithoutUsers_permissions_updated_byTousersInput)
    create!: permissionsCreateWithoutUsers_permissions_updated_byTousersInput;
}
