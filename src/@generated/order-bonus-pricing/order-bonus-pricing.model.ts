import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';
import { users } from '../users/users.model';
import { terminals } from '../terminals/terminals.model';
import { organization } from '../organization/organization.model';

@ObjectType()
export class order_bonus_pricing {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    active!: boolean;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    start_time!: Date;

    @Field(() => Date, {nullable:false})
    end_time!: Date;

    @Field(() => GraphQLJSON, {nullable:false})
    rules!: any;

    @Field(() => Int, {nullable:false,defaultValue:0})
    min_distance_km!: number;

    @Field(() => String, {nullable:false})
    organization_id!: string;

    @Field(() => String, {nullable:true})
    terminal_id!: string | null;

    @Field(() => String, {nullable:true})
    courier_id!: string | null;

    @Field(() => users, {nullable:true})
    courier?: users | null;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => String, {nullable:true})
    created_by!: string | null;

    @Field(() => String, {nullable:true})
    updated_by!: string | null;

    @Field(() => users, {nullable:true})
    users_order_bonus_pricing_created_byTousers?: users | null;

    @Field(() => users, {nullable:true})
    users_order_bonus_pricing_updated_byTousers?: users | null;

    @Field(() => terminals, {nullable:true})
    terminals?: terminals | null;

    @Field(() => organization, {nullable:true})
    organization?: organization | null;
}
