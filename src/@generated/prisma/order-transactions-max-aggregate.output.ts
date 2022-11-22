import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { order_transaction_status } from './order-transaction-status.enum';
import { order_transaction_payment_type } from './order-transaction-payment-type.enum';

@ObjectType()
export class Order_transactionsMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    order_id?: string;

    @Field(() => String, {nullable:true})
    terminal_id?: string;

    @Field(() => String, {nullable:true})
    courier_id?: string;

    @Field(() => String, {nullable:true})
    organization_id?: string;

    @Field(() => String, {nullable:true})
    card_number?: string;

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => order_transaction_status, {nullable:true})
    status?: keyof typeof order_transaction_status;

    @Field(() => order_transaction_payment_type, {nullable:true})
    transaction_payment_type?: keyof typeof order_transaction_payment_type;

    @Field(() => String, {nullable:true})
    transaction_type?: string;

    @Field(() => String, {nullable:true})
    comment?: string;

    @Field(() => String, {nullable:true})
    error_text?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;
}
