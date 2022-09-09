import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';
import { Type } from 'class-transformer';
import { terminalsCreateWithoutOrders_terminalsInput } from './terminals-create-without-orders-terminals.input';

@InputType()
export class terminalsCreateOrConnectWithoutOrders_terminalsInput {

    @Field(() => terminalsWhereUniqueInput, {nullable:false})
    @Type(() => terminalsWhereUniqueInput)
    where!: terminalsWhereUniqueInput;

    @Field(() => terminalsCreateWithoutOrders_terminalsInput, {nullable:false})
    @Type(() => terminalsCreateWithoutOrders_terminalsInput)
    create!: terminalsCreateWithoutOrders_terminalsInput;
}
