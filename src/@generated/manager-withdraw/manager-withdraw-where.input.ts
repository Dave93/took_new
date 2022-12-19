import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UsersRelationFilter } from '../prisma/users-relation-filter.input';
import { OrganizationRelationFilter } from '../prisma/organization-relation-filter.input';
import { TerminalsRelationFilter } from '../prisma/terminals-relation-filter.input';
import { Manager_withdraw_transactionsListRelationFilter } from '../prisma/manager-withdraw-transactions-list-relation-filter.input';

@InputType()
export class manager_withdrawWhereInput {

    @Field(() => [manager_withdrawWhereInput], {nullable:true})
    AND?: Array<manager_withdrawWhereInput>;

    @Field(() => [manager_withdrawWhereInput], {nullable:true})
    OR?: Array<manager_withdrawWhereInput>;

    @Field(() => [manager_withdrawWhereInput], {nullable:true})
    NOT?: Array<manager_withdrawWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    manager_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    courier_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    terminal_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    organization_id?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    amount?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    amount_before?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    amount_after?: FloatFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    payed_date?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    created_by?: StringNullableFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    manager_withdraw_created_byTousers?: UsersRelationFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    manager_withdraw_managers?: UsersRelationFilter;

    @Field(() => OrganizationRelationFilter, {nullable:true})
    manager_withdraw_organizations?: OrganizationRelationFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    manager_withdraw_couriers?: UsersRelationFilter;

    @Field(() => TerminalsRelationFilter, {nullable:true})
    manager_withdraw_terminals?: TerminalsRelationFilter;

    @Field(() => Manager_withdraw_transactionsListRelationFilter, {nullable:true})
    manager_withdraw_transactions_withdraw?: Manager_withdraw_transactionsListRelationFilter;
}
