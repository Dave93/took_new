import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersCreateWithoutOrders_couriersInput } from './orders-create-without-orders-couriers.input';
import { Type } from 'class-transformer';
import { ordersCreateOrConnectWithoutOrders_couriersInput } from './orders-create-or-connect-without-orders-couriers.input';
import { ordersUpsertWithWhereUniqueWithoutOrders_couriersInput } from './orders-upsert-with-where-unique-without-orders-couriers.input';
import { ordersCreateManyOrders_couriersInputEnvelope } from './orders-create-many-orders-couriers-input-envelope.input';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { ordersUpdateWithWhereUniqueWithoutOrders_couriersInput } from './orders-update-with-where-unique-without-orders-couriers.input';
import { ordersUpdateManyWithWhereWithoutOrders_couriersInput } from './orders-update-many-with-where-without-orders-couriers.input';
import { ordersScalarWhereInput } from './orders-scalar-where.input';

@InputType()
export class ordersUpdateManyWithoutOrders_couriersNestedInput {

    @Field(() => [ordersCreateWithoutOrders_couriersInput], {nullable:true})
    @Type(() => ordersCreateWithoutOrders_couriersInput)
    create?: Array<ordersCreateWithoutOrders_couriersInput>;

    @Field(() => [ordersCreateOrConnectWithoutOrders_couriersInput], {nullable:true})
    @Type(() => ordersCreateOrConnectWithoutOrders_couriersInput)
    connectOrCreate?: Array<ordersCreateOrConnectWithoutOrders_couriersInput>;

    @Field(() => [ordersUpsertWithWhereUniqueWithoutOrders_couriersInput], {nullable:true})
    @Type(() => ordersUpsertWithWhereUniqueWithoutOrders_couriersInput)
    upsert?: Array<ordersUpsertWithWhereUniqueWithoutOrders_couriersInput>;

    @Field(() => ordersCreateManyOrders_couriersInputEnvelope, {nullable:true})
    @Type(() => ordersCreateManyOrders_couriersInputEnvelope)
    createMany?: ordersCreateManyOrders_couriersInputEnvelope;

    @Field(() => [ordersWhereUniqueInput], {nullable:true})
    @Type(() => ordersWhereUniqueInput)
    set?: Array<ordersWhereUniqueInput>;

    @Field(() => [ordersWhereUniqueInput], {nullable:true})
    @Type(() => ordersWhereUniqueInput)
    disconnect?: Array<ordersWhereUniqueInput>;

    @Field(() => [ordersWhereUniqueInput], {nullable:true})
    @Type(() => ordersWhereUniqueInput)
    delete?: Array<ordersWhereUniqueInput>;

    @Field(() => [ordersWhereUniqueInput], {nullable:true})
    @Type(() => ordersWhereUniqueInput)
    connect?: Array<ordersWhereUniqueInput>;

    @Field(() => [ordersUpdateWithWhereUniqueWithoutOrders_couriersInput], {nullable:true})
    @Type(() => ordersUpdateWithWhereUniqueWithoutOrders_couriersInput)
    update?: Array<ordersUpdateWithWhereUniqueWithoutOrders_couriersInput>;

    @Field(() => [ordersUpdateManyWithWhereWithoutOrders_couriersInput], {nullable:true})
    @Type(() => ordersUpdateManyWithWhereWithoutOrders_couriersInput)
    updateMany?: Array<ordersUpdateManyWithWhereWithoutOrders_couriersInput>;

    @Field(() => [ordersScalarWhereInput], {nullable:true})
    @Type(() => ordersScalarWhereInput)
    deleteMany?: Array<ordersScalarWhereInput>;
}
