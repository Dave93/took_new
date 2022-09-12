import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_locationsCreateWithoutOrder_locations_ordersInput } from './order-locations-create-without-order-locations-orders.input';
import { Type } from 'class-transformer';
import { order_locationsCreateOrConnectWithoutOrder_locations_ordersInput } from './order-locations-create-or-connect-without-order-locations-orders.input';
import { order_locationsCreateManyOrder_locations_ordersInputEnvelope } from './order-locations-create-many-order-locations-orders-input-envelope.input';
import { order_locationsWhereUniqueInput } from './order-locations-where-unique.input';

@InputType()
export class order_locationsCreateNestedManyWithoutOrder_locations_ordersInput {

    @Field(() => [order_locationsCreateWithoutOrder_locations_ordersInput], {nullable:true})
    @Type(() => order_locationsCreateWithoutOrder_locations_ordersInput)
    create?: Array<order_locationsCreateWithoutOrder_locations_ordersInput>;

    @Field(() => [order_locationsCreateOrConnectWithoutOrder_locations_ordersInput], {nullable:true})
    @Type(() => order_locationsCreateOrConnectWithoutOrder_locations_ordersInput)
    connectOrCreate?: Array<order_locationsCreateOrConnectWithoutOrder_locations_ordersInput>;

    @Field(() => order_locationsCreateManyOrder_locations_ordersInputEnvelope, {nullable:true})
    @Type(() => order_locationsCreateManyOrder_locations_ordersInputEnvelope)
    createMany?: order_locationsCreateManyOrder_locations_ordersInputEnvelope;

    @Field(() => [order_locationsWhereUniqueInput], {nullable:true})
    @Type(() => order_locationsWhereUniqueInput)
    connect?: Array<order_locationsWhereUniqueInput>;
}
