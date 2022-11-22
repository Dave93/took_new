import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsCreateWithoutOrder_transactions_terminalsInput } from './terminals-create-without-order-transactions-terminals.input';
import { Type } from 'class-transformer';
import { terminalsCreateOrConnectWithoutOrder_transactions_terminalsInput } from './terminals-create-or-connect-without-order-transactions-terminals.input';
import { terminalsUpsertWithoutOrder_transactions_terminalsInput } from './terminals-upsert-without-order-transactions-terminals.input';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';
import { terminalsUpdateWithoutOrder_transactions_terminalsInput } from './terminals-update-without-order-transactions-terminals.input';

@InputType()
export class terminalsUpdateOneRequiredWithoutOrder_transactions_terminalsNestedInput {

    @Field(() => terminalsCreateWithoutOrder_transactions_terminalsInput, {nullable:true})
    @Type(() => terminalsCreateWithoutOrder_transactions_terminalsInput)
    create?: terminalsCreateWithoutOrder_transactions_terminalsInput;

    @Field(() => terminalsCreateOrConnectWithoutOrder_transactions_terminalsInput, {nullable:true})
    @Type(() => terminalsCreateOrConnectWithoutOrder_transactions_terminalsInput)
    connectOrCreate?: terminalsCreateOrConnectWithoutOrder_transactions_terminalsInput;

    @Field(() => terminalsUpsertWithoutOrder_transactions_terminalsInput, {nullable:true})
    @Type(() => terminalsUpsertWithoutOrder_transactions_terminalsInput)
    upsert?: terminalsUpsertWithoutOrder_transactions_terminalsInput;

    @Field(() => terminalsWhereUniqueInput, {nullable:true})
    @Type(() => terminalsWhereUniqueInput)
    connect?: terminalsWhereUniqueInput;

    @Field(() => terminalsUpdateWithoutOrder_transactions_terminalsInput, {nullable:true})
    @Type(() => terminalsUpdateWithoutOrder_transactions_terminalsInput)
    update?: terminalsUpdateWithoutOrder_transactions_terminalsInput;
}
