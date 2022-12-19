import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationUpdateWithoutManager_withdraw_organizationsInput } from './organization-update-without-manager-withdraw-organizations.input';
import { Type } from 'class-transformer';
import { organizationCreateWithoutManager_withdraw_organizationsInput } from './organization-create-without-manager-withdraw-organizations.input';

@InputType()
export class organizationUpsertWithoutManager_withdraw_organizationsInput {

    @Field(() => organizationUpdateWithoutManager_withdraw_organizationsInput, {nullable:false})
    @Type(() => organizationUpdateWithoutManager_withdraw_organizationsInput)
    update!: organizationUpdateWithoutManager_withdraw_organizationsInput;

    @Field(() => organizationCreateWithoutManager_withdraw_organizationsInput, {nullable:false})
    @Type(() => organizationCreateWithoutManager_withdraw_organizationsInput)
    create!: organizationCreateWithoutManager_withdraw_organizationsInput;
}
