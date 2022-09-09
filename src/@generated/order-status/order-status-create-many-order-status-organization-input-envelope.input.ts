import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_statusCreateManyOrder_status_organizationInput } from './order-status-create-many-order-status-organization.input';
import { Type } from 'class-transformer';

@InputType()
export class order_statusCreateManyOrder_status_organizationInputEnvelope {

    @Field(() => [order_statusCreateManyOrder_status_organizationInput], {nullable:false})
    @Type(() => order_statusCreateManyOrder_status_organizationInput)
    data!: Array<order_statusCreateManyOrder_status_organizationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
