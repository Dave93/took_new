import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';
import { Type } from 'class-transformer';
import { terminalsCreateWithoutOrder_transactions_terminalsInput } from './terminals-create-without-order-transactions-terminals.input';

@InputType()
export class terminalsCreateOrConnectWithoutOrder_transactions_terminalsInput {

    @Field(() => terminalsWhereUniqueInput, {nullable:false})
    @Type(() => terminalsWhereUniqueInput)
    where!: terminalsWhereUniqueInput;

    @Field(() => terminalsCreateWithoutOrder_transactions_terminalsInput, {nullable:false})
    @Type(() => terminalsCreateWithoutOrder_transactions_terminalsInput)
    create!: terminalsCreateWithoutOrder_transactions_terminalsInput;
}
