import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UsersCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    phone!: number;

    @Field(() => Int, {nullable:false})
    first_name!: number;

    @Field(() => Int, {nullable:false})
    last_name!: number;

    @Field(() => Int, {nullable:false})
    password!: number;

    @Field(() => Int, {nullable:false})
    is_super_user!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    drive_type!: number;

    @Field(() => Int, {nullable:false})
    card_name!: number;

    @Field(() => Int, {nullable:false})
    card_number!: number;

    @Field(() => Int, {nullable:false})
    birth_date!: number;

    @Field(() => Int, {nullable:false})
    car_model!: number;

    @Field(() => Int, {nullable:false})
    car_number!: number;

    @Field(() => Int, {nullable:false})
    is_online!: number;

    @Field(() => Int, {nullable:false})
    latitude!: number;

    @Field(() => Int, {nullable:false})
    longitude!: number;

    @Field(() => Int, {nullable:false})
    fcm_token!: number;

    @Field(() => Int, {nullable:false})
    wallet_balance!: number;

    @Field(() => Int, {nullable:false})
    max_active_order_count!: number;

    @Field(() => Int, {nullable:false})
    created_at!: number;

    @Field(() => Int, {nullable:false})
    updated_at!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
