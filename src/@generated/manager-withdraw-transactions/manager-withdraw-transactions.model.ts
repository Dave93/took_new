import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { manager_withdraw } from '../manager-withdraw/manager-withdraw.model';
import { order_transactions } from '../order-transactions/order-transactions.model';

@ObjectType()
export class manager_withdraw_transactions {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    withdraw_id!: string;

    @Field(() => String, {nullable:false})
    transaction_id!: string;

    @Field(() => Float, {nullable:false,defaultValue:0})
    amount!: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:true})
    payed_date!: Date | null;

    @Field(() => manager_withdraw, {nullable:false})
    manager_withdraw_transactions_withdraw?: manager_withdraw;

    @Field(() => order_transactions, {nullable:false})
    manager_withdraw_transactions_transaction?: order_transactions;
}
