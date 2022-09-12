import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_locationsCreateWithoutOrder_locations_terminalsInput } from './order-locations-create-without-order-locations-terminals.input';
import { Type } from 'class-transformer';
import { order_locationsCreateOrConnectWithoutOrder_locations_terminalsInput } from './order-locations-create-or-connect-without-order-locations-terminals.input';
import { order_locationsCreateManyOrder_locations_terminalsInputEnvelope } from './order-locations-create-many-order-locations-terminals-input-envelope.input';
import { order_locationsWhereUniqueInput } from './order-locations-where-unique.input';

@InputType()
export class order_locationsCreateNestedManyWithoutOrder_locations_terminalsInput {

    @Field(() => [order_locationsCreateWithoutOrder_locations_terminalsInput], {nullable:true})
    @Type(() => order_locationsCreateWithoutOrder_locations_terminalsInput)
    create?: Array<order_locationsCreateWithoutOrder_locations_terminalsInput>;

    @Field(() => [order_locationsCreateOrConnectWithoutOrder_locations_terminalsInput], {nullable:true})
    @Type(() => order_locationsCreateOrConnectWithoutOrder_locations_terminalsInput)
    connectOrCreate?: Array<order_locationsCreateOrConnectWithoutOrder_locations_terminalsInput>;

    @Field(() => order_locationsCreateManyOrder_locations_terminalsInputEnvelope, {nullable:true})
    @Type(() => order_locationsCreateManyOrder_locations_terminalsInputEnvelope)
    createMany?: order_locationsCreateManyOrder_locations_terminalsInputEnvelope;

    @Field(() => [order_locationsWhereUniqueInput], {nullable:true})
    @Type(() => order_locationsWhereUniqueInput)
    connect?: Array<order_locationsWhereUniqueInput>;
}
