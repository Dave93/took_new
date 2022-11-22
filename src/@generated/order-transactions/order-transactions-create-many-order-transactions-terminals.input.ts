import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { order_transaction_status } from '../prisma/order-transaction-status.enum';
import { order_transaction_payment_type } from '../prisma/order-transaction-payment-type.enum';

@InputType()
export class order_transactionsCreateManyOrder_transactions_terminalsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    order_id?: string;

    @Field(() => String, {nullable:false})
    courier_id!: string;

    @Field(() => String, {nullable:false})
    organization_id!: string;

    @Field(() => String, {nullable:true})
    card_number?: string;

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => order_transaction_status, {nullable:true})
    status?: keyof typeof order_transaction_status;

    @Field(() => order_transaction_payment_type, {nullable:true})
    transaction_payment_type?: keyof typeof order_transaction_payment_type;

    @Field(() => String, {nullable:false})
    transaction_type!: string;

    @Field(() => String, {nullable:true})
    comment?: string;

    @Field(() => String, {nullable:true})
    error_text?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;
}
