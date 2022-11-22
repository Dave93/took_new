import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class order_statusUncheckedUpdateWithoutOrders_order_statusInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Int, {nullable:true})
    sort?: number;

    @Field(() => String, {nullable:true})
    organization_id?: string;

    @Field(() => String, {nullable:true})
    color?: string;

    @Field(() => Boolean, {nullable:true})
    finish?: boolean;

    @Field(() => Boolean, {nullable:true})
    cancel?: boolean;

    @Field(() => Boolean, {nullable:true})
    waiting?: boolean;

    @Field(() => Boolean, {nullable:true})
    need_location?: boolean;

    @Field(() => Boolean, {nullable:true})
    on_way?: boolean;

    @Field(() => Boolean, {nullable:true})
    in_terminal?: boolean;
}
