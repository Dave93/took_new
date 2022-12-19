import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { usersOrderByWithRelationInput } from '../users/users-order-by-with-relation.input';
import { ordersOrderByWithRelationInput } from '../orders/orders-order-by-with-relation.input';
import { terminalsOrderByWithRelationInput } from '../terminals/terminals-order-by-with-relation.input';
import { organizationOrderByWithRelationInput } from '../organization/organization-order-by-with-relation.input';
import { manager_withdraw_transactionsOrderByRelationAggregateInput } from '../manager-withdraw-transactions/manager-withdraw-transactions-order-by-relation-aggregate.input';

@InputType()
export class order_transactionsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    order_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    terminal_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    courier_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    organization_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    card_number?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    not_paid_amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    transaction_payment_type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    transaction_type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    comment?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    error_text?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    order_transactions_created_byTousers?: usersOrderByWithRelationInput;

    @Field(() => ordersOrderByWithRelationInput, {nullable:true})
    order_transactions_orders?: ordersOrderByWithRelationInput;

    @Field(() => terminalsOrderByWithRelationInput, {nullable:true})
    order_transactions_terminals?: terminalsOrderByWithRelationInput;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    order_transactions_couriers?: usersOrderByWithRelationInput;

    @Field(() => organizationOrderByWithRelationInput, {nullable:true})
    order_transactions_organizations?: organizationOrderByWithRelationInput;

    @Field(() => manager_withdraw_transactionsOrderByRelationAggregateInput, {nullable:true})
    manager_withdraw_transactions_transaction?: manager_withdraw_transactionsOrderByRelationAggregateInput;
}
