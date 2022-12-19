import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { manager_withdrawOrderByWithRelationInput } from '../manager-withdraw/manager-withdraw-order-by-with-relation.input';
import { order_transactionsOrderByWithRelationInput } from '../order-transactions/order-transactions-order-by-with-relation.input';

@InputType()
export class manager_withdraw_transactionsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    withdraw_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    transaction_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    payed_date?: keyof typeof SortOrder;

    @Field(() => manager_withdrawOrderByWithRelationInput, {nullable:true})
    manager_withdraw_transactions_withdraw?: manager_withdrawOrderByWithRelationInput;

    @Field(() => order_transactionsOrderByWithRelationInput, {nullable:true})
    manager_withdraw_transactions_transaction?: order_transactionsOrderByWithRelationInput;
}
