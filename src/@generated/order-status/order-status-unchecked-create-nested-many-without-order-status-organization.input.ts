import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_statusCreateWithoutOrder_status_organizationInput } from './order-status-create-without-order-status-organization.input';
import { Type } from 'class-transformer';
import { order_statusCreateOrConnectWithoutOrder_status_organizationInput } from './order-status-create-or-connect-without-order-status-organization.input';
import { order_statusCreateManyOrder_status_organizationInputEnvelope } from './order-status-create-many-order-status-organization-input-envelope.input';
import { order_statusWhereUniqueInput } from './order-status-where-unique.input';

@InputType()
export class order_statusUncheckedCreateNestedManyWithoutOrder_status_organizationInput {

    @Field(() => [order_statusCreateWithoutOrder_status_organizationInput], {nullable:true})
    @Type(() => order_statusCreateWithoutOrder_status_organizationInput)
    create?: Array<order_statusCreateWithoutOrder_status_organizationInput>;

    @Field(() => [order_statusCreateOrConnectWithoutOrder_status_organizationInput], {nullable:true})
    @Type(() => order_statusCreateOrConnectWithoutOrder_status_organizationInput)
    connectOrCreate?: Array<order_statusCreateOrConnectWithoutOrder_status_organizationInput>;

    @Field(() => order_statusCreateManyOrder_status_organizationInputEnvelope, {nullable:true})
    @Type(() => order_statusCreateManyOrder_status_organizationInputEnvelope)
    createMany?: order_statusCreateManyOrder_status_organizationInputEnvelope;

    @Field(() => [order_statusWhereUniqueInput], {nullable:true})
    @Type(() => order_statusWhereUniqueInput)
    connect?: Array<order_statusWhereUniqueInput>;
}
