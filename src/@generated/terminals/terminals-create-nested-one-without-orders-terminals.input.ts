import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsCreateWithoutOrders_terminalsInput } from './terminals-create-without-orders-terminals.input';
import { Type } from 'class-transformer';
import { terminalsCreateOrConnectWithoutOrders_terminalsInput } from './terminals-create-or-connect-without-orders-terminals.input';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';

@InputType()
export class terminalsCreateNestedOneWithoutOrders_terminalsInput {

    @Field(() => terminalsCreateWithoutOrders_terminalsInput, {nullable:true})
    @Type(() => terminalsCreateWithoutOrders_terminalsInput)
    create?: terminalsCreateWithoutOrders_terminalsInput;

    @Field(() => terminalsCreateOrConnectWithoutOrders_terminalsInput, {nullable:true})
    @Type(() => terminalsCreateOrConnectWithoutOrders_terminalsInput)
    connectOrCreate?: terminalsCreateOrConnectWithoutOrders_terminalsInput;

    @Field(() => terminalsWhereUniqueInput, {nullable:true})
    @Type(() => terminalsWhereUniqueInput)
    connect?: terminalsWhereUniqueInput;
}
