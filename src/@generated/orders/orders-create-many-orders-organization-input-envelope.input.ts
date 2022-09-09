import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersCreateManyOrders_organizationInput } from './orders-create-many-orders-organization.input';
import { Type } from 'class-transformer';

@InputType()
export class ordersCreateManyOrders_organizationInputEnvelope {

    @Field(() => [ordersCreateManyOrders_organizationInput], {nullable:false})
    @Type(() => ordersCreateManyOrders_organizationInput)
    data!: Array<ordersCreateManyOrders_organizationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
