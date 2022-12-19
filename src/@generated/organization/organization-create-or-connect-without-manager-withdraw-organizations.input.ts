import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationWhereUniqueInput } from './organization-where-unique.input';
import { Type } from 'class-transformer';
import { organizationCreateWithoutManager_withdraw_organizationsInput } from './organization-create-without-manager-withdraw-organizations.input';

@InputType()
export class organizationCreateOrConnectWithoutManager_withdraw_organizationsInput {

    @Field(() => organizationWhereUniqueInput, {nullable:false})
    @Type(() => organizationWhereUniqueInput)
    where!: organizationWhereUniqueInput;

    @Field(() => organizationCreateWithoutManager_withdraw_organizationsInput, {nullable:false})
    @Type(() => organizationCreateWithoutManager_withdraw_organizationsInput)
    create!: organizationCreateWithoutManager_withdraw_organizationsInput;
}
