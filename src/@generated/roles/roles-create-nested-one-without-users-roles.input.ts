import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { rolesCreateWithoutUsers_rolesInput } from './roles-create-without-users-roles.input';
import { Type } from 'class-transformer';
import { rolesCreateOrConnectWithoutUsers_rolesInput } from './roles-create-or-connect-without-users-roles.input';
import { rolesWhereUniqueInput } from './roles-where-unique.input';

@InputType()
export class rolesCreateNestedOneWithoutUsers_rolesInput {

    @Field(() => rolesCreateWithoutUsers_rolesInput, {nullable:true})
    @Type(() => rolesCreateWithoutUsers_rolesInput)
    create?: rolesCreateWithoutUsers_rolesInput;

    @Field(() => rolesCreateOrConnectWithoutUsers_rolesInput, {nullable:true})
    @Type(() => rolesCreateOrConnectWithoutUsers_rolesInput)
    connectOrCreate?: rolesCreateOrConnectWithoutUsers_rolesInput;

    @Field(() => rolesWhereUniqueInput, {nullable:true})
    @Type(() => rolesWhereUniqueInput)
    connect?: rolesWhereUniqueInput;
}
