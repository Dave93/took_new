import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { permissionsWhereUniqueInput } from './permissions-where-unique.input';
import { Type } from 'class-transformer';
import { permissionsUpdateWithoutUsers_permissions_updated_byTousersInput } from './permissions-update-without-users-permissions-updated-by-tousers.input';

@InputType()
export class permissionsUpdateWithWhereUniqueWithoutUsers_permissions_updated_byTousersInput {

    @Field(() => permissionsWhereUniqueInput, {nullable:false})
    @Type(() => permissionsWhereUniqueInput)
    where!: permissionsWhereUniqueInput;

    @Field(() => permissionsUpdateWithoutUsers_permissions_updated_byTousersInput, {nullable:false})
    @Type(() => permissionsUpdateWithoutUsers_permissions_updated_byTousersInput)
    data!: permissionsUpdateWithoutUsers_permissions_updated_byTousersInput;
}
