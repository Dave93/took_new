import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_locationsCreateWithoutOrder_locations_couriersInput } from './order-locations-create-without-order-locations-couriers.input';
import { Type } from 'class-transformer';
import { order_locationsCreateOrConnectWithoutOrder_locations_couriersInput } from './order-locations-create-or-connect-without-order-locations-couriers.input';
import { order_locationsCreateManyOrder_locations_couriersInputEnvelope } from './order-locations-create-many-order-locations-couriers-input-envelope.input';
import { order_locationsWhereUniqueInput } from './order-locations-where-unique.input';

@InputType()
export class order_locationsUncheckedCreateNestedManyWithoutOrder_locations_couriersInput {

    @Field(() => [order_locationsCreateWithoutOrder_locations_couriersInput], {nullable:true})
    @Type(() => order_locationsCreateWithoutOrder_locations_couriersInput)
    create?: Array<order_locationsCreateWithoutOrder_locations_couriersInput>;

    @Field(() => [order_locationsCreateOrConnectWithoutOrder_locations_couriersInput], {nullable:true})
    @Type(() => order_locationsCreateOrConnectWithoutOrder_locations_couriersInput)
    connectOrCreate?: Array<order_locationsCreateOrConnectWithoutOrder_locations_couriersInput>;

    @Field(() => order_locationsCreateManyOrder_locations_couriersInputEnvelope, {nullable:true})
    @Type(() => order_locationsCreateManyOrder_locations_couriersInputEnvelope)
    createMany?: order_locationsCreateManyOrder_locations_couriersInputEnvelope;

    @Field(() => [order_locationsWhereUniqueInput], {nullable:true})
    @Type(() => order_locationsWhereUniqueInput)
    connect?: Array<order_locationsWhereUniqueInput>;
}
