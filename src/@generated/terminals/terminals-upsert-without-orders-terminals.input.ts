import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsUpdateWithoutOrders_terminalsInput } from './terminals-update-without-orders-terminals.input';
import { Type } from 'class-transformer';
import { terminalsCreateWithoutOrders_terminalsInput } from './terminals-create-without-orders-terminals.input';

@InputType()
export class terminalsUpsertWithoutOrders_terminalsInput {

    @Field(() => terminalsUpdateWithoutOrders_terminalsInput, {nullable:false})
    @Type(() => terminalsUpdateWithoutOrders_terminalsInput)
    update!: terminalsUpdateWithoutOrders_terminalsInput;

    @Field(() => terminalsCreateWithoutOrders_terminalsInput, {nullable:false})
    @Type(() => terminalsCreateWithoutOrders_terminalsInput)
    create!: terminalsCreateWithoutOrders_terminalsInput;
}
