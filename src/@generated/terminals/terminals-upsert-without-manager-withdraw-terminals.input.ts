import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsUpdateWithoutManager_withdraw_terminalsInput } from './terminals-update-without-manager-withdraw-terminals.input';
import { Type } from 'class-transformer';
import { terminalsCreateWithoutManager_withdraw_terminalsInput } from './terminals-create-without-manager-withdraw-terminals.input';

@InputType()
export class terminalsUpsertWithoutManager_withdraw_terminalsInput {

    @Field(() => terminalsUpdateWithoutManager_withdraw_terminalsInput, {nullable:false})
    @Type(() => terminalsUpdateWithoutManager_withdraw_terminalsInput)
    update!: terminalsUpdateWithoutManager_withdraw_terminalsInput;

    @Field(() => terminalsCreateWithoutManager_withdraw_terminalsInput, {nullable:false})
    @Type(() => terminalsCreateWithoutManager_withdraw_terminalsInput)
    create!: terminalsCreateWithoutManager_withdraw_terminalsInput;
}
