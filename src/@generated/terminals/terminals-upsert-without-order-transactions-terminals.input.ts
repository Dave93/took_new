import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsUpdateWithoutOrder_transactions_terminalsInput } from './terminals-update-without-order-transactions-terminals.input';
import { Type } from 'class-transformer';
import { terminalsCreateWithoutOrder_transactions_terminalsInput } from './terminals-create-without-order-transactions-terminals.input';

@InputType()
export class terminalsUpsertWithoutOrder_transactions_terminalsInput {

    @Field(() => terminalsUpdateWithoutOrder_transactions_terminalsInput, {nullable:false})
    @Type(() => terminalsUpdateWithoutOrder_transactions_terminalsInput)
    update!: terminalsUpdateWithoutOrder_transactions_terminalsInput;

    @Field(() => terminalsCreateWithoutOrder_transactions_terminalsInput, {nullable:false})
    @Type(() => terminalsCreateWithoutOrder_transactions_terminalsInput)
    create!: terminalsCreateWithoutOrder_transactions_terminalsInput;
}
