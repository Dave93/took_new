import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { rolesWhereUniqueInput } from './roles-where-unique.input';
import { Type } from 'class-transformer';
import { rolesUpdateWithoutUsers_roles_created_byTousersInput } from './roles-update-without-users-roles-created-by-tousers.input';

@InputType()
export class rolesUpdateWithWhereUniqueWithoutUsers_roles_created_byTousersInput {

    @Field(() => rolesWhereUniqueInput, {nullable:false})
    @Type(() => rolesWhereUniqueInput)
    where!: rolesWhereUniqueInput;

    @Field(() => rolesUpdateWithoutUsers_roles_created_byTousersInput, {nullable:false})
    @Type(() => rolesUpdateWithoutUsers_roles_created_byTousersInput)
    data!: rolesUpdateWithoutUsers_roles_created_byTousersInput;
}
