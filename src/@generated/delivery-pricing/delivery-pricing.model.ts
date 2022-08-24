import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { drive_type } from '../prisma/drive-type.enum';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { users } from '../users/users.model';

@ObjectType()
export class delivery_pricing {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    active!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    default!: boolean;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => drive_type, {nullable:false,defaultValue:'car'})
    drive_type!: keyof typeof drive_type;

    @Field(() => [String], {nullable:true})
    days!: Array<string>;

    @Field(() => Date, {nullable:false})
    start_time!: Date;

    @Field(() => Date, {nullable:false})
    end_time!: Date;

    @Field(() => Int, {nullable:true})
    min_price!: number | null;

    @Field(() => GraphQLJSON, {nullable:false})
    rules!: any;

    @Field(() => Int, {nullable:false,defaultValue:0})
    price_per_km!: number;

    @Field(() => String, {nullable:false})
    organization_id!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => String, {nullable:true})
    created_by!: string | null;

    @Field(() => String, {nullable:true})
    updated_by!: string | null;

    @Field(() => users, {nullable:true})
    users_delivery_pricing_created_byTousers?: users | null;

    @Field(() => users, {nullable:true})
    users_delivery_pricing_updated_byTousers?: users | null;

    @Field(() => users, {nullable:false})
    delivery_pricing_organization_idTousers?: users;
}
