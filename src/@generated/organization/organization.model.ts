import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { organization_system_type } from './organization-system-type.enum';
import { Int } from '@nestjs/graphql';
import { work_schedules } from '../work-schedules/work-schedules.model';
import { users } from '../users/users.model';
import { delivery_pricing } from '../delivery-pricing/delivery-pricing.model';
import { terminals } from '../terminals/terminals.model';
import { order_status } from '../order-status/order-status.model';
import { orders } from '../orders/orders.model';
import { OrganizationCount } from '../prisma/organization-count.output';

@ObjectType()
export class organization {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    external_id!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    active!: boolean;

    @Field(() => organization_system_type, {nullable:false,defaultValue:'iiko'})
    system_type!: keyof typeof organization_system_type;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => String, {nullable:true})
    iiko_login!: string | null;

    @Field(() => String, {nullable:true})
    webhook!: string | null;

    @Field(() => String, {nullable:true})
    group_id!: string | null;

    @Field(() => String, {nullable:true})
    apelsin_login!: string | null;

    @Field(() => String, {nullable:true})
    apelsin_password!: string | null;

    @Field(() => String, {nullable:true})
    sender_name!: string | null;

    @Field(() => String, {nullable:true})
    sender_number!: string | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Int, {nullable:false,defaultValue:0})
    max_distance!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    max_active_order_count!: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => String, {nullable:true})
    created_by!: string | null;

    @Field(() => String, {nullable:true})
    updated_by!: string | null;

    @Field(() => [work_schedules], {nullable:true})
    work_schedules_organization_idTorganization?: Array<work_schedules>;

    @Field(() => users, {nullable:true})
    organization_created_byTousers?: users | null;

    @Field(() => users, {nullable:true})
    organization_updated_byTousers?: users | null;

    @Field(() => [delivery_pricing], {nullable:true})
    delivery_pricing_organization_idTorganization?: Array<delivery_pricing>;

    @Field(() => [terminals], {nullable:true})
    terminals_organization_idTorganization?: Array<terminals>;

    @Field(() => [order_status], {nullable:true})
    order_status_organization?: Array<order_status>;

    @Field(() => [orders], {nullable:true})
    orders_organization?: Array<orders>;

    @Field(() => OrganizationCount, {nullable:false})
    _count?: OrganizationCount;
}
