import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsCreateWithoutOrder_transactions_terminalsInput } from './terminals-create-without-order-transactions-terminals.input';
import { Type } from 'class-transformer';
import { terminalsCreateOrConnectWithoutOrder_transactions_terminalsInput } from './terminals-create-or-connect-without-order-transactions-terminals.input';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';

@InputType()
export class terminalsCreateNestedOneWithoutOrder_transactions_terminalsInput {

    @Field(() => terminalsCreateWithoutOrder_transactions_terminalsInput, {nullable:true})
    @Type(() => terminalsCreateWithoutOrder_transactions_terminalsInput)
    create?: terminalsCreateWithoutOrder_transactions_terminalsInput;

    @Field(() => terminalsCreateOrConnectWithoutOrder_transactions_terminalsInput, {nullable:true})
    @Type(() => terminalsCreateOrConnectWithoutOrder_transactions_terminalsInput)
    connectOrCreate?: terminalsCreateOrConnectWithoutOrder_transactions_terminalsInput;

    @Field(() => terminalsWhereUniqueInput, {nullable:true})
    @Type(() => terminalsWhereUniqueInput)
    connect?: terminalsWhereUniqueInput;
}
