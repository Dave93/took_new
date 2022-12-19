import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';
import { Type } from 'class-transformer';
import { terminalsCreateWithoutManager_withdraw_terminalsInput } from './terminals-create-without-manager-withdraw-terminals.input';

@InputType()
export class terminalsCreateOrConnectWithoutManager_withdraw_terminalsInput {

    @Field(() => terminalsWhereUniqueInput, {nullable:false})
    @Type(() => terminalsWhereUniqueInput)
    where!: terminalsWhereUniqueInput;

    @Field(() => terminalsCreateWithoutManager_withdraw_terminalsInput, {nullable:false})
    @Type(() => terminalsCreateWithoutManager_withdraw_terminalsInput)
    create!: terminalsCreateWithoutManager_withdraw_terminalsInput;
}
