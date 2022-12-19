import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { users } from '../users/users.model';
import { organization } from '../organization/organization.model';
import { terminals } from '../terminals/terminals.model';
import { manager_withdraw_transactions } from '../manager-withdraw-transactions/manager-withdraw-transactions.model';
import { Manager_withdrawCount } from '../prisma/manager-withdraw-count.output';

@ObjectType()
export class manager_withdraw {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    manager_id!: string;

    @Field(() => String, {nullable:false})
    courier_id!: string;

    @Field(() => String, {nullable:false})
    terminal_id!: string;

    @Field(() => String, {nullable:false})
    organization_id!: string;

    @Field(() => Float, {nullable:false,defaultValue:0})
    amount!: number;

    @Field(() => Float, {nullable:false,defaultValue:0})
    amount_before!: number;

    @Field(() => Float, {nullable:false,defaultValue:0})
    amount_after!: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:true})
    payed_date!: Date | null;

    @Field(() => String, {nullable:true})
    created_by!: string | null;

    @Field(() => users, {nullable:true})
    manager_withdraw_created_byTousers?: users | null;

    @Field(() => users, {nullable:false})
    manager_withdraw_managers?: users;

    @Field(() => organization, {nullable:false})
    manager_withdraw_organizations?: organization;

    @Field(() => users, {nullable:false})
    manager_withdraw_couriers?: users;

    @Field(() => terminals, {nullable:false})
    manager_withdraw_terminals?: terminals;

    @Field(() => [manager_withdraw_transactions], {nullable:true})
    manager_withdraw_transactions_withdraw?: Array<manager_withdraw_transactions>;

    @Field(() => Manager_withdrawCount, {nullable:false})
    _count?: Manager_withdrawCount;
}
