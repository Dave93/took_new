import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { user_status } from './user-status.enum';
import { drive_type } from './drive-type.enum';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UsersCountAggregate } from './users-count-aggregate.output';
import { UsersAvgAggregate } from './users-avg-aggregate.output';
import { UsersSumAggregate } from './users-sum-aggregate.output';
import { UsersMinAggregate } from './users-min-aggregate.output';
import { UsersMaxAggregate } from './users-max-aggregate.output';

@ObjectType()
export class UsersGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => String, {nullable:true})
    first_name?: string;

    @Field(() => String, {nullable:true})
    last_name?: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => Boolean, {nullable:false})
    is_super_user!: boolean;

    @Field(() => user_status, {nullable:false})
    status!: keyof typeof user_status;

    @Field(() => drive_type, {nullable:true})
    drive_type?: keyof typeof drive_type;

    @Field(() => String, {nullable:true})
    card_name?: string;

    @Field(() => String, {nullable:true})
    card_number?: string;

    @Field(() => Date, {nullable:true})
    birth_date?: Date | string;

    @Field(() => String, {nullable:true})
    car_model?: string;

    @Field(() => String, {nullable:true})
    car_number?: string;

    @Field(() => Boolean, {nullable:false})
    is_online!: boolean;

    @Field(() => Float, {nullable:true})
    latitude?: number;

    @Field(() => Float, {nullable:true})
    longitude?: number;

    @Field(() => String, {nullable:true})
    fcm_token?: string;

    @Field(() => Float, {nullable:false})
    wallet_balance!: number;

    @Field(() => Int, {nullable:true})
    max_active_order_count?: number;

    @Field(() => [String], {nullable:true})
    doc_files?: Array<string>;

    @Field(() => Date, {nullable:true})
    order_start_date?: Date | string;

    @Field(() => String, {nullable:true})
    app_version?: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => String, {nullable:true})
    api_token?: string;

    @Field(() => String, {nullable:true})
    tg_id?: string;

    @Field(() => UsersCountAggregate, {nullable:true})
    _count?: UsersCountAggregate;

    @Field(() => UsersAvgAggregate, {nullable:true})
    _avg?: UsersAvgAggregate;

    @Field(() => UsersSumAggregate, {nullable:true})
    _sum?: UsersSumAggregate;

    @Field(() => UsersMinAggregate, {nullable:true})
    _min?: UsersMinAggregate;

    @Field(() => UsersMaxAggregate, {nullable:true})
    _max?: UsersMaxAggregate;
}
