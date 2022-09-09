import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersCreateWithoutOrders_organizationInput } from './orders-create-without-orders-organization.input';
import { Type } from 'class-transformer';
import { ordersCreateOrConnectWithoutOrders_organizationInput } from './orders-create-or-connect-without-orders-organization.input';
import { ordersCreateManyOrders_organizationInputEnvelope } from './orders-create-many-orders-organization-input-envelope.input';
import { ordersWhereUniqueInput } from './orders-where-unique.input';

@InputType()
export class ordersCreateNestedManyWithoutOrders_organizationInput {

    @Field(() => [ordersCreateWithoutOrders_organizationInput], {nullable:true})
    @Type(() => ordersCreateWithoutOrders_organizationInput)
    create?: Array<ordersCreateWithoutOrders_organizationInput>;

    @Field(() => [ordersCreateOrConnectWithoutOrders_organizationInput], {nullable:true})
    @Type(() => ordersCreateOrConnectWithoutOrders_organizationInput)
    connectOrCreate?: Array<ordersCreateOrConnectWithoutOrders_organizationInput>;

    @Field(() => ordersCreateManyOrders_organizationInputEnvelope, {nullable:true})
    @Type(() => ordersCreateManyOrders_organizationInputEnvelope)
    createMany?: ordersCreateManyOrders_organizationInputEnvelope;

    @Field(() => [ordersWhereUniqueInput], {nullable:true})
    @Type(() => ordersWhereUniqueInput)
    connect?: Array<ordersWhereUniqueInput>;
}
