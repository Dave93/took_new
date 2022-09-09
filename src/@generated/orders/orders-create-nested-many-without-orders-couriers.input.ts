import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersCreateWithoutOrders_couriersInput } from './orders-create-without-orders-couriers.input';
import { Type } from 'class-transformer';
import { ordersCreateOrConnectWithoutOrders_couriersInput } from './orders-create-or-connect-without-orders-couriers.input';
import { ordersCreateManyOrders_couriersInputEnvelope } from './orders-create-many-orders-couriers-input-envelope.input';
import { ordersWhereUniqueInput } from './orders-where-unique.input';

@InputType()
export class ordersCreateNestedManyWithoutOrders_couriersInput {

    @Field(() => [ordersCreateWithoutOrders_couriersInput], {nullable:true})
    @Type(() => ordersCreateWithoutOrders_couriersInput)
    create?: Array<ordersCreateWithoutOrders_couriersInput>;

    @Field(() => [ordersCreateOrConnectWithoutOrders_couriersInput], {nullable:true})
    @Type(() => ordersCreateOrConnectWithoutOrders_couriersInput)
    connectOrCreate?: Array<ordersCreateOrConnectWithoutOrders_couriersInput>;

    @Field(() => ordersCreateManyOrders_couriersInputEnvelope, {nullable:true})
    @Type(() => ordersCreateManyOrders_couriersInputEnvelope)
    createMany?: ordersCreateManyOrders_couriersInputEnvelope;

    @Field(() => [ordersWhereUniqueInput], {nullable:true})
    @Type(() => ordersWhereUniqueInput)
    connect?: Array<ordersWhereUniqueInput>;
}
