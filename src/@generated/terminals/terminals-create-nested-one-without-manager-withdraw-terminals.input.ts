import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsCreateWithoutManager_withdraw_terminalsInput } from './terminals-create-without-manager-withdraw-terminals.input';
import { Type } from 'class-transformer';
import { terminalsCreateOrConnectWithoutManager_withdraw_terminalsInput } from './terminals-create-or-connect-without-manager-withdraw-terminals.input';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';

@InputType()
export class terminalsCreateNestedOneWithoutManager_withdraw_terminalsInput {

    @Field(() => terminalsCreateWithoutManager_withdraw_terminalsInput, {nullable:true})
    @Type(() => terminalsCreateWithoutManager_withdraw_terminalsInput)
    create?: terminalsCreateWithoutManager_withdraw_terminalsInput;

    @Field(() => terminalsCreateOrConnectWithoutManager_withdraw_terminalsInput, {nullable:true})
    @Type(() => terminalsCreateOrConnectWithoutManager_withdraw_terminalsInput)
    connectOrCreate?: terminalsCreateOrConnectWithoutManager_withdraw_terminalsInput;

    @Field(() => terminalsWhereUniqueInput, {nullable:true})
    @Type(() => terminalsWhereUniqueInput)
    connect?: terminalsWhereUniqueInput;
}
