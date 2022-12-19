import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manager_withdrawWhereUniqueInput } from './manager-withdraw-where-unique.input';
import { Type } from 'class-transformer';
import { manager_withdrawUpdateWithoutManager_withdraw_terminalsInput } from './manager-withdraw-update-without-manager-withdraw-terminals.input';
import { manager_withdrawCreateWithoutManager_withdraw_terminalsInput } from './manager-withdraw-create-without-manager-withdraw-terminals.input';

@InputType()
export class manager_withdrawUpsertWithWhereUniqueWithoutManager_withdraw_terminalsInput {

    @Field(() => manager_withdrawWhereUniqueInput, {nullable:false})
    @Type(() => manager_withdrawWhereUniqueInput)
    where!: manager_withdrawWhereUniqueInput;

    @Field(() => manager_withdrawUpdateWithoutManager_withdraw_terminalsInput, {nullable:false})
    @Type(() => manager_withdrawUpdateWithoutManager_withdraw_terminalsInput)
    update!: manager_withdrawUpdateWithoutManager_withdraw_terminalsInput;

    @Field(() => manager_withdrawCreateWithoutManager_withdraw_terminalsInput, {nullable:false})
    @Type(() => manager_withdrawCreateWithoutManager_withdraw_terminalsInput)
    create!: manager_withdrawCreateWithoutManager_withdraw_terminalsInput;
}
