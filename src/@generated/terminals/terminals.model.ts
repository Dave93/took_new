import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { organization } from '../organization/organization.model';
import { users } from '../users/users.model';
import { users_terminals } from '../users-terminals/users-terminals.model';
import { orders } from '../orders/orders.model';
import { TerminalsCount } from '../prisma/terminals-count.output';

@ObjectType()
export class terminals {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    active!: boolean;

    @Field(() => String, {nullable:true})
    phone!: string | null;

    @Field(() => String, {nullable:true})
    address!: string | null;

    @Field(() => Float, {nullable:false,defaultValue:0})
    latitude!: number;

    @Field(() => Float, {nullable:false,defaultValue:0})
    longitude!: number;

    @Field(() => String, {nullable:false})
    external_id!: string;

    @Field(() => String, {nullable:false})
    organization_id!: string;

    @Field(() => organization, {nullable:false})
    organization?: organization;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => String, {nullable:true})
    created_by!: string | null;

    @Field(() => String, {nullable:true})
    updated_by!: string | null;

    @Field(() => users, {nullable:true})
    terminals_created_byTousers?: users | null;

    @Field(() => users, {nullable:true})
    terminals_updated_byTousers?: users | null;

    @Field(() => [users_terminals], {nullable:true})
    users_terminals?: Array<users_terminals>;

    @Field(() => [orders], {nullable:true})
    orders_terminals?: Array<orders>;

    @Field(() => TerminalsCount, {nullable:false})
    _count?: TerminalsCount;
}
