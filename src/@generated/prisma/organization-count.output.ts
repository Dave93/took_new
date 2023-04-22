import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class OrganizationCount {

    @Field(() => Int, {nullable:false})
    work_schedules_organization_idTorganization!: number;

    @Field(() => Int, {nullable:false})
    delivery_pricing_organization_idTorganization!: number;

    @Field(() => Int, {nullable:false})
    terminals_organization_idTorganization!: number;

    @Field(() => Int, {nullable:false})
    order_status_organization!: number;

    @Field(() => Int, {nullable:false})
    orders_organization!: number;

    @Field(() => Int, {nullable:false})
    api_tokens_organization!: number;

    @Field(() => Int, {nullable:false})
    order_transactions_organizations!: number;

    @Field(() => Int, {nullable:false})
    courier_terminal_balance_organizations!: number;

    @Field(() => Int, {nullable:false})
    manager_withdraw_organizations!: number;

    @Field(() => Int, {nullable:false})
    order_bonus_pricing!: number;
}
