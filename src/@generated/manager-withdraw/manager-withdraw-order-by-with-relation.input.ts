import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { usersOrderByWithRelationInput } from '../users/users-order-by-with-relation.input';
import { organizationOrderByWithRelationInput } from '../organization/organization-order-by-with-relation.input';
import { terminalsOrderByWithRelationInput } from '../terminals/terminals-order-by-with-relation.input';
import { manager_withdraw_transactionsOrderByRelationAggregateInput } from '../manager-withdraw-transactions/manager-withdraw-transactions-order-by-relation-aggregate.input';

@InputType()
export class manager_withdrawOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    manager_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    courier_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    terminal_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    organization_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount_before?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount_after?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    payed_date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    manager_withdraw_created_byTousers?: usersOrderByWithRelationInput;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    manager_withdraw_managers?: usersOrderByWithRelationInput;

    @Field(() => organizationOrderByWithRelationInput, {nullable:true})
    manager_withdraw_organizations?: organizationOrderByWithRelationInput;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    manager_withdraw_couriers?: usersOrderByWithRelationInput;

    @Field(() => terminalsOrderByWithRelationInput, {nullable:true})
    manager_withdraw_terminals?: terminalsOrderByWithRelationInput;

    @Field(() => manager_withdraw_transactionsOrderByRelationAggregateInput, {nullable:true})
    manager_withdraw_transactions_withdraw?: manager_withdraw_transactionsOrderByRelationAggregateInput;
}
