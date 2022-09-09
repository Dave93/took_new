import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_statusWhereUniqueInput } from './order-status-where-unique.input';
import { Type } from 'class-transformer';
import { order_statusCreateWithoutOrder_status_organizationInput } from './order-status-create-without-order-status-organization.input';

@InputType()
export class order_statusCreateOrConnectWithoutOrder_status_organizationInput {

    @Field(() => order_statusWhereUniqueInput, {nullable:false})
    @Type(() => order_statusWhereUniqueInput)
    where!: order_statusWhereUniqueInput;

    @Field(() => order_statusCreateWithoutOrder_status_organizationInput, {nullable:false})
    @Type(() => order_statusCreateWithoutOrder_status_organizationInput)
    create!: order_statusCreateWithoutOrder_status_organizationInput;
}
