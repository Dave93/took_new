import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class OrganizationCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    external_id!: number;

    @Field(() => Int, {nullable:false})
    active!: number;

    @Field(() => Int, {nullable:false})
    system_type!: number;

    @Field(() => Int, {nullable:false})
    phone!: number;

    @Field(() => Int, {nullable:false})
    iiko_login!: number;

    @Field(() => Int, {nullable:false})
    webhook!: number;

    @Field(() => Int, {nullable:false})
    group_id!: number;

    @Field(() => Int, {nullable:false})
    apelsin_login!: number;

    @Field(() => Int, {nullable:false})
    apelsin_password!: number;

    @Field(() => Int, {nullable:false})
    sender_name!: number;

    @Field(() => Int, {nullable:false})
    sender_number!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    max_distance!: number;

    @Field(() => Int, {nullable:false})
    max_active_order_count!: number;

    @Field(() => Int, {nullable:false})
    max_order_close_distance!: number;

    @Field(() => Int, {nullable:false})
    payment_type!: number;

    @Field(() => Int, {nullable:false})
    support_chat_url!: number;

    @Field(() => Int, {nullable:false})
    icon_url!: number;

    @Field(() => Int, {nullable:false})
    created_at!: number;

    @Field(() => Int, {nullable:false})
    updated_at!: number;

    @Field(() => Int, {nullable:false})
    created_by!: number;

    @Field(() => Int, {nullable:false})
    updated_by!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
