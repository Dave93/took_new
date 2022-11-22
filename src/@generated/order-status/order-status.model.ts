import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { organization } from '../organization/organization.model';
import { orders } from '../orders/orders.model';
import { Order_statusCount } from '../prisma/order-status-count.output';

@ObjectType()
export class order_status {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false,defaultValue:0})
    sort!: number;

    @Field(() => String, {nullable:false})
    organization_id!: string;

    @Field(() => String, {nullable:true})
    color!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    finish!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    cancel!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    waiting!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    need_location!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    on_way!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    in_terminal!: boolean;

    @Field(() => organization, {nullable:false})
    order_status_organization?: organization;

    @Field(() => [orders], {nullable:true})
    orders_order_status?: Array<orders>;

    @Field(() => Order_statusCount, {nullable:false})
    _count?: Order_statusCount;
}
