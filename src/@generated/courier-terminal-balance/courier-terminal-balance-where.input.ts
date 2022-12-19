import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UsersRelationFilter } from '../prisma/users-relation-filter.input';
import { TerminalsRelationFilter } from '../prisma/terminals-relation-filter.input';
import { OrganizationRelationFilter } from '../prisma/organization-relation-filter.input';

@InputType()
export class courier_terminal_balanceWhereInput {

    @Field(() => [courier_terminal_balanceWhereInput], {nullable:true})
    AND?: Array<courier_terminal_balanceWhereInput>;

    @Field(() => [courier_terminal_balanceWhereInput], {nullable:true})
    OR?: Array<courier_terminal_balanceWhereInput>;

    @Field(() => [courier_terminal_balanceWhereInput], {nullable:true})
    NOT?: Array<courier_terminal_balanceWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    courier_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    terminal_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    organization_id?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    balance?: FloatFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    created_by?: StringNullableFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    courier_terminal_balance_created_byTousers?: UsersRelationFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    courier_terminal_balance_couriers?: UsersRelationFilter;

    @Field(() => TerminalsRelationFilter, {nullable:true})
    courier_terminal_balance_terminals?: TerminalsRelationFilter;

    @Field(() => OrganizationRelationFilter, {nullable:true})
    courier_terminal_balance_organizations?: OrganizationRelationFilter;
}
