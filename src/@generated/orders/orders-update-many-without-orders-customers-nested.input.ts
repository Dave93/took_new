import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersCreateWithoutOrders_customersInput } from './orders-create-without-orders-customers.input';
import { Type } from 'class-transformer';
import { ordersCreateOrConnectWithoutOrders_customersInput } from './orders-create-or-connect-without-orders-customers.input';
import { ordersUpsertWithWhereUniqueWithoutOrders_customersInput } from './orders-upsert-with-where-unique-without-orders-customers.input';
import { ordersCreateManyOrders_customersInputEnvelope } from './orders-create-many-orders-customers-input-envelope.input';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { ordersUpdateWithWhereUniqueWithoutOrders_customersInput } from './orders-update-with-where-unique-without-orders-customers.input';
import { ordersUpdateManyWithWhereWithoutOrders_customersInput } from './orders-update-many-with-where-without-orders-customers.input';
import { ordersScalarWhereInput } from './orders-scalar-where.input';

@InputType()
export class ordersUpdateManyWithoutOrders_customersNestedInput {

    @Field(() => [ordersCreateWithoutOrders_customersInput], {nullable:true})
    @Type(() => ordersCreateWithoutOrders_customersInput)
    create?: Array<ordersCreateWithoutOrders_customersInput>;

    @Field(() => [ordersCreateOrConnectWithoutOrders_customersInput], {nullable:true})
    @Type(() => ordersCreateOrConnectWithoutOrders_customersInput)
    connectOrCreate?: Array<ordersCreateOrConnectWithoutOrders_customersInput>;

    @Field(() => [ordersUpsertWithWhereUniqueWithoutOrders_customersInput], {nullable:true})
    @Type(() => ordersUpsertWithWhereUniqueWithoutOrders_customersInput)
    upsert?: Array<ordersUpsertWithWhereUniqueWithoutOrders_customersInput>;

    @Field(() => ordersCreateManyOrders_customersInputEnvelope, {nullable:true})
    @Type(() => ordersCreateManyOrders_customersInputEnvelope)
    createMany?: ordersCreateManyOrders_customersInputEnvelope;

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

    @Field(() => [ordersUpdateWithWhereUniqueWithoutOrders_customersInput], {nullable:true})
    @Type(() => ordersUpdateWithWhereUniqueWithoutOrders_customersInput)
    update?: Array<ordersUpdateWithWhereUniqueWithoutOrders_customersInput>;

    @Field(() => [ordersUpdateManyWithWhereWithoutOrders_customersInput], {nullable:true})
    @Type(() => ordersUpdateManyWithWhereWithoutOrders_customersInput)
    updateMany?: Array<ordersUpdateManyWithWhereWithoutOrders_customersInput>;

    @Field(() => [ordersScalarWhereInput], {nullable:true})
    @Type(() => ordersScalarWhereInput)
    deleteMany?: Array<ordersScalarWhereInput>;
}
