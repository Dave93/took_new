import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_statusWhereUniqueInput } from './order-status-where-unique.input';
import { Type } from 'class-transformer';
import { order_statusUpdateWithoutOrder_status_organizationInput } from './order-status-update-without-order-status-organization.input';

@InputType()
export class order_statusUpdateWithWhereUniqueWithoutOrder_status_organizationInput {

    @Field(() => order_statusWhereUniqueInput, {nullable:false})
    @Type(() => order_statusWhereUniqueInput)
    where!: order_statusWhereUniqueInput;

    @Field(() => order_statusUpdateWithoutOrder_status_organizationInput, {nullable:false})
    @Type(() => order_statusUpdateWithoutOrder_status_organizationInput)
    data!: order_statusUpdateWithoutOrder_status_organizationInput;
}
