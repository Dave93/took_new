import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsCreateWithoutOrders_terminalsInput } from './terminals-create-without-orders-terminals.input';
import { Type } from 'class-transformer';
import { terminalsCreateOrConnectWithoutOrders_terminalsInput } from './terminals-create-or-connect-without-orders-terminals.input';
import { terminalsUpsertWithoutOrders_terminalsInput } from './terminals-upsert-without-orders-terminals.input';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';
import { terminalsUpdateWithoutOrders_terminalsInput } from './terminals-update-without-orders-terminals.input';

@InputType()
export class terminalsUpdateOneRequiredWithoutOrders_terminalsNestedInput {

    @Field(() => terminalsCreateWithoutOrders_terminalsInput, {nullable:true})
    @Type(() => terminalsCreateWithoutOrders_terminalsInput)
    create?: terminalsCreateWithoutOrders_terminalsInput;

    @Field(() => terminalsCreateOrConnectWithoutOrders_terminalsInput, {nullable:true})
    @Type(() => terminalsCreateOrConnectWithoutOrders_terminalsInput)
    connectOrCreate?: terminalsCreateOrConnectWithoutOrders_terminalsInput;

    @Field(() => terminalsUpsertWithoutOrders_terminalsInput, {nullable:true})
    @Type(() => terminalsUpsertWithoutOrders_terminalsInput)
    upsert?: terminalsUpsertWithoutOrders_terminalsInput;

    @Field(() => terminalsWhereUniqueInput, {nullable:true})
    @Type(() => terminalsWhereUniqueInput)
    connect?: terminalsWhereUniqueInput;

    @Field(() => terminalsUpdateWithoutOrders_terminalsInput, {nullable:true})
    @Type(() => terminalsUpdateWithoutOrders_terminalsInput)
    update?: terminalsUpdateWithoutOrders_terminalsInput;
}
