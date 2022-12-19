import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationCreateWithoutManager_withdraw_organizationsInput } from './organization-create-without-manager-withdraw-organizations.input';
import { Type } from 'class-transformer';
import { organizationCreateOrConnectWithoutManager_withdraw_organizationsInput } from './organization-create-or-connect-without-manager-withdraw-organizations.input';
import { organizationWhereUniqueInput } from './organization-where-unique.input';

@InputType()
export class organizationCreateNestedOneWithoutManager_withdraw_organizationsInput {

    @Field(() => organizationCreateWithoutManager_withdraw_organizationsInput, {nullable:true})
    @Type(() => organizationCreateWithoutManager_withdraw_organizationsInput)
    create?: organizationCreateWithoutManager_withdraw_organizationsInput;

    @Field(() => organizationCreateOrConnectWithoutManager_withdraw_organizationsInput, {nullable:true})
    @Type(() => organizationCreateOrConnectWithoutManager_withdraw_organizationsInput)
    connectOrCreate?: organizationCreateOrConnectWithoutManager_withdraw_organizationsInput;

    @Field(() => organizationWhereUniqueInput, {nullable:true})
    @Type(() => organizationWhereUniqueInput)
    connect?: organizationWhereUniqueInput;
}
