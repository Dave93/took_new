import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_locationsCreateWithoutOrder_locations_ordersInput } from './order-locations-create-without-order-locations-orders.input';
import { Type } from 'class-transformer';
import { order_locationsCreateOrConnectWithoutOrder_locations_ordersInput } from './order-locations-create-or-connect-without-order-locations-orders.input';
import { order_locationsUpsertWithWhereUniqueWithoutOrder_locations_ordersInput } from './order-locations-upsert-with-where-unique-without-order-locations-orders.input';
import { order_locationsCreateManyOrder_locations_ordersInputEnvelope } from './order-locations-create-many-order-locations-orders-input-envelope.input';
import { order_locationsWhereUniqueInput } from './order-locations-where-unique.input';
import { order_locationsUpdateWithWhereUniqueWithoutOrder_locations_ordersInput } from './order-locations-update-with-where-unique-without-order-locations-orders.input';
import { order_locationsUpdateManyWithWhereWithoutOrder_locations_ordersInput } from './order-locations-update-many-with-where-without-order-locations-orders.input';
import { order_locationsScalarWhereInput } from './order-locations-scalar-where.input';

@InputType()
export class order_locationsUpdateManyWithoutOrder_locations_ordersNestedInput {

    @Field(() => [order_locationsCreateWithoutOrder_locations_ordersInput], {nullable:true})
    @Type(() => order_locationsCreateWithoutOrder_locations_ordersInput)
    create?: Array<order_locationsCreateWithoutOrder_locations_ordersInput>;

    @Field(() => [order_locationsCreateOrConnectWithoutOrder_locations_ordersInput], {nullable:true})
    @Type(() => order_locationsCreateOrConnectWithoutOrder_locations_ordersInput)
    connectOrCreate?: Array<order_locationsCreateOrConnectWithoutOrder_locations_ordersInput>;

    @Field(() => [order_locationsUpsertWithWhereUniqueWithoutOrder_locations_ordersInput], {nullable:true})
    @Type(() => order_locationsUpsertWithWhereUniqueWithoutOrder_locations_ordersInput)
    upsert?: Array<order_locationsUpsertWithWhereUniqueWithoutOrder_locations_ordersInput>;

    @Field(() => order_locationsCreateManyOrder_locations_ordersInputEnvelope, {nullable:true})
    @Type(() => order_locationsCreateManyOrder_locations_ordersInputEnvelope)
    createMany?: order_locationsCreateManyOrder_locations_ordersInputEnvelope;

    @Field(() => [order_locationsWhereUniqueInput], {nullable:true})
    @Type(() => order_locationsWhereUniqueInput)
    set?: Array<order_locationsWhereUniqueInput>;

    @Field(() => [order_locationsWhereUniqueInput], {nullable:true})
    @Type(() => order_locationsWhereUniqueInput)
    disconnect?: Array<order_locationsWhereUniqueInput>;

    @Field(() => [order_locationsWhereUniqueInput], {nullable:true})
    @Type(() => order_locationsWhereUniqueInput)
    delete?: Array<order_locationsWhereUniqueInput>;

    @Field(() => [order_locationsWhereUniqueInput], {nullable:true})
    @Type(() => order_locationsWhereUniqueInput)
    connect?: Array<order_locationsWhereUniqueInput>;

    @Field(() => [order_locationsUpdateWithWhereUniqueWithoutOrder_locations_ordersInput], {nullable:true})
    @Type(() => order_locationsUpdateWithWhereUniqueWithoutOrder_locations_ordersInput)
    update?: Array<order_locationsUpdateWithWhereUniqueWithoutOrder_locations_ordersInput>;

    @Field(() => [order_locationsUpdateManyWithWhereWithoutOrder_locations_ordersInput], {nullable:true})
    @Type(() => order_locationsUpdateManyWithWhereWithoutOrder_locations_ordersInput)
    updateMany?: Array<order_locationsUpdateManyWithWhereWithoutOrder_locations_ordersInput>;

    @Field(() => [order_locationsScalarWhereInput], {nullable:true})
    @Type(() => order_locationsScalarWhereInput)
    deleteMany?: Array<order_locationsScalarWhereInput>;
}
