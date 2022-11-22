import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { order_transaction_status } from '../prisma/order-transaction-status.enum';
import { order_transaction_payment_type } from '../prisma/order-transaction-payment-type.enum';
import { users } from '../users/users.model';
import { orders } from '../orders/orders.model';
import { terminals } from '../terminals/terminals.model';
import { organization } from '../organization/organization.model';

@ObjectType()
export class order_transactions {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    order_id!: string | null;

    @Field(() => String, {nullable:false})
    terminal_id!: string;

    @Field(() => String, {nullable:false})
    courier_id!: string;

    @Field(() => String, {nullable:false})
    organization_id!: string;

    @Field(() => String, {nullable:true})
    card_number!: string | null;

    @Field(() => Float, {nullable:false,defaultValue:0})
    amount!: number;

    @Field(() => order_transaction_status, {nullable:false,defaultValue:'pending'})
    status!: keyof typeof order_transaction_status;

    @Field(() => order_transaction_payment_type, {nullable:false,defaultValue:'cash'})
    transaction_payment_type!: keyof typeof order_transaction_payment_type;

    @Field(() => String, {nullable:false})
    transaction_type!: string;

    @Field(() => String, {nullable:true})
    comment!: string | null;

    @Field(() => String, {nullable:true})
    error_text!: string | null;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => String, {nullable:true})
    created_by!: string | null;

    @Field(() => users, {nullable:true})
    order_transactions_created_byTousers?: users | null;

    @Field(() => orders, {nullable:true})
    order_transactions_orders?: orders | null;

    @Field(() => terminals, {nullable:false})
    order_transactions_terminals?: terminals;

    @Field(() => users, {nullable:false})
    order_transactions_couriers?: users;

    @Field(() => organization, {nullable:false})
    order_transactions_organizations?: organization;
}
