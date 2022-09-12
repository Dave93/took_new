import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersCreateWithoutOrder_locations_ordersInput } from './orders-create-without-order-locations-orders.input';
import { Type } from 'class-transformer';
import { ordersCreateOrConnectWithoutOrder_locations_ordersInput } from './orders-create-or-connect-without-order-locations-orders.input';
import { ordersUpsertWithoutOrder_locations_ordersInput } from './orders-upsert-without-order-locations-orders.input';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { ordersUpdateWithoutOrder_locations_ordersInput } from './orders-update-without-order-locations-orders.input';

@InputType()
export class ordersUpdateOneRequiredWithoutOrder_locations_ordersNestedInput {

    @Field(() => ordersCreateWithoutOrder_locations_ordersInput, {nullable:true})
    @Type(() => ordersCreateWithoutOrder_locations_ordersInput)
    create?: ordersCreateWithoutOrder_locations_ordersInput;

    @Field(() => ordersCreateOrConnectWithoutOrder_locations_ordersInput, {nullable:true})
    @Type(() => ordersCreateOrConnectWithoutOrder_locations_ordersInput)
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_locations_ordersInput;

    @Field(() => ordersUpsertWithoutOrder_locations_ordersInput, {nullable:true})
    @Type(() => ordersUpsertWithoutOrder_locations_ordersInput)
    upsert?: ordersUpsertWithoutOrder_locations_ordersInput;

    @Field(() => ordersWhereUniqueInput, {nullable:true})
    @Type(() => ordersWhereUniqueInput)
    connect?: ordersWhereUniqueInput;

    @Field(() => ordersUpdateWithoutOrder_locations_ordersInput, {nullable:true})
    @Type(() => ordersUpdateWithoutOrder_locations_ordersInput)
    update?: ordersUpdateWithoutOrder_locations_ordersInput;
}
