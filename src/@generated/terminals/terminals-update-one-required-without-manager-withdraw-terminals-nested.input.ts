import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsCreateWithoutManager_withdraw_terminalsInput } from './terminals-create-without-manager-withdraw-terminals.input';
import { Type } from 'class-transformer';
import { terminalsCreateOrConnectWithoutManager_withdraw_terminalsInput } from './terminals-create-or-connect-without-manager-withdraw-terminals.input';
import { terminalsUpsertWithoutManager_withdraw_terminalsInput } from './terminals-upsert-without-manager-withdraw-terminals.input';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';
import { terminalsUpdateWithoutManager_withdraw_terminalsInput } from './terminals-update-without-manager-withdraw-terminals.input';

@InputType()
export class terminalsUpdateOneRequiredWithoutManager_withdraw_terminalsNestedInput {

    @Field(() => terminalsCreateWithoutManager_withdraw_terminalsInput, {nullable:true})
    @Type(() => terminalsCreateWithoutManager_withdraw_terminalsInput)
    create?: terminalsCreateWithoutManager_withdraw_terminalsInput;

    @Field(() => terminalsCreateOrConnectWithoutManager_withdraw_terminalsInput, {nullable:true})
    @Type(() => terminalsCreateOrConnectWithoutManager_withdraw_terminalsInput)
    connectOrCreate?: terminalsCreateOrConnectWithoutManager_withdraw_terminalsInput;

    @Field(() => terminalsUpsertWithoutManager_withdraw_terminalsInput, {nullable:true})
    @Type(() => terminalsUpsertWithoutManager_withdraw_terminalsInput)
    upsert?: terminalsUpsertWithoutManager_withdraw_terminalsInput;

    @Field(() => terminalsWhereUniqueInput, {nullable:true})
    @Type(() => terminalsWhereUniqueInput)
    connect?: terminalsWhereUniqueInput;

    @Field(() => terminalsUpdateWithoutManager_withdraw_terminalsInput, {nullable:true})
    @Type(() => terminalsUpdateWithoutManager_withdraw_terminalsInput)
    update?: terminalsUpdateWithoutManager_withdraw_terminalsInput;
}
