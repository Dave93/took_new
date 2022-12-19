import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationCreateWithoutManager_withdraw_organizationsInput } from './organization-create-without-manager-withdraw-organizations.input';
import { Type } from 'class-transformer';
import { organizationCreateOrConnectWithoutManager_withdraw_organizationsInput } from './organization-create-or-connect-without-manager-withdraw-organizations.input';
import { organizationUpsertWithoutManager_withdraw_organizationsInput } from './organization-upsert-without-manager-withdraw-organizations.input';
import { organizationWhereUniqueInput } from './organization-where-unique.input';
import { organizationUpdateWithoutManager_withdraw_organizationsInput } from './organization-update-without-manager-withdraw-organizations.input';

@InputType()
export class organizationUpdateOneRequiredWithoutManager_withdraw_organizationsNestedInput {

    @Field(() => organizationCreateWithoutManager_withdraw_organizationsInput, {nullable:true})
    @Type(() => organizationCreateWithoutManager_withdraw_organizationsInput)
    create?: organizationCreateWithoutManager_withdraw_organizationsInput;

    @Field(() => organizationCreateOrConnectWithoutManager_withdraw_organizationsInput, {nullable:true})
    @Type(() => organizationCreateOrConnectWithoutManager_withdraw_organizationsInput)
    connectOrCreate?: organizationCreateOrConnectWithoutManager_withdraw_organizationsInput;

    @Field(() => organizationUpsertWithoutManager_withdraw_organizationsInput, {nullable:true})
    @Type(() => organizationUpsertWithoutManager_withdraw_organizationsInput)
    upsert?: organizationUpsertWithoutManager_withdraw_organizationsInput;

    @Field(() => organizationWhereUniqueInput, {nullable:true})
    @Type(() => organizationWhereUniqueInput)
    connect?: organizationWhereUniqueInput;

    @Field(() => organizationUpdateWithoutManager_withdraw_organizationsInput, {nullable:true})
    @Type(() => organizationUpdateWithoutManager_withdraw_organizationsInput)
    update?: organizationUpdateWithoutManager_withdraw_organizationsInput;
}
