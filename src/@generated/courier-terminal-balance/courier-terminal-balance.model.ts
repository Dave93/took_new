import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { users } from '../users/users.model';
import { terminals } from '../terminals/terminals.model';
import { organization } from '../organization/organization.model';

@ObjectType()
export class courier_terminal_balance {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    courier_id!: string;

    @Field(() => String, {nullable:false})
    terminal_id!: string;

    @Field(() => String, {nullable:false})
    organization_id!: string;

    @Field(() => Float, {nullable:false,defaultValue:0})
    balance!: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => String, {nullable:true})
    created_by!: string | null;

    @Field(() => users, {nullable:true})
    courier_terminal_balance_created_byTousers?: users | null;

    @Field(() => users, {nullable:false})
    courier_terminal_balance_couriers?: users;

    @Field(() => terminals, {nullable:false})
    courier_terminal_balance_terminals?: terminals;

    @Field(() => organization, {nullable:false})
    courier_terminal_balance_organizations?: organization;
}
