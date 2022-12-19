import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manager_withdrawWhereUniqueInput } from './manager-withdraw-where-unique.input';
import { Type } from 'class-transformer';
import { manager_withdrawUpdateWithoutManager_withdraw_organizationsInput } from './manager-withdraw-update-without-manager-withdraw-organizations.input';

@InputType()
export class manager_withdrawUpdateWithWhereUniqueWithoutManager_withdraw_organizationsInput {

    @Field(() => manager_withdrawWhereUniqueInput, {nullable:false})
    @Type(() => manager_withdrawWhereUniqueInput)
    where!: manager_withdrawWhereUniqueInput;

    @Field(() => manager_withdrawUpdateWithoutManager_withdraw_organizationsInput, {nullable:false})
    @Type(() => manager_withdrawUpdateWithoutManager_withdraw_organizationsInput)
    data!: manager_withdrawUpdateWithoutManager_withdraw_organizationsInput;
}
