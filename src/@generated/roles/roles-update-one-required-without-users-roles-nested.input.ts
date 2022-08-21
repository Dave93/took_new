import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { rolesCreateWithoutUsers_rolesInput } from './roles-create-without-users-roles.input';
import { Type } from 'class-transformer';
import { rolesCreateOrConnectWithoutUsers_rolesInput } from './roles-create-or-connect-without-users-roles.input';
import { rolesUpsertWithoutUsers_rolesInput } from './roles-upsert-without-users-roles.input';
import { rolesWhereUniqueInput } from './roles-where-unique.input';
import { rolesUpdateWithoutUsers_rolesInput } from './roles-update-without-users-roles.input';

@InputType()
export class rolesUpdateOneRequiredWithoutUsers_rolesNestedInput {

    @Field(() => rolesCreateWithoutUsers_rolesInput, {nullable:true})
    @Type(() => rolesCreateWithoutUsers_rolesInput)
    create?: rolesCreateWithoutUsers_rolesInput;

    @Field(() => rolesCreateOrConnectWithoutUsers_rolesInput, {nullable:true})
    @Type(() => rolesCreateOrConnectWithoutUsers_rolesInput)
    connectOrCreate?: rolesCreateOrConnectWithoutUsers_rolesInput;

    @Field(() => rolesUpsertWithoutUsers_rolesInput, {nullable:true})
    @Type(() => rolesUpsertWithoutUsers_rolesInput)
    upsert?: rolesUpsertWithoutUsers_rolesInput;

    @Field(() => rolesWhereUniqueInput, {nullable:true})
    @Type(() => rolesWhereUniqueInput)
    connect?: rolesWhereUniqueInput;

    @Field(() => rolesUpdateWithoutUsers_rolesInput, {nullable:true})
    @Type(() => rolesUpdateWithoutUsers_rolesInput)
    update?: rolesUpdateWithoutUsers_rolesInput;
}
