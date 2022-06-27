import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { rolesWhereUniqueInput } from './roles-where-unique.input';
import { Type } from 'class-transformer';
import { rolesCreateWithoutUsers_rolesInput } from './roles-create-without-users-roles.input';

@InputType()
export class rolesCreateOrConnectWithoutUsers_rolesInput {

    @Field(() => rolesWhereUniqueInput, {nullable:false})
    @Type(() => rolesWhereUniqueInput)
    where!: rolesWhereUniqueInput;

    @Field(() => rolesCreateWithoutUsers_rolesInput, {nullable:false})
    @Type(() => rolesCreateWithoutUsers_rolesInput)
    create!: rolesCreateWithoutUsers_rolesInput;
}
