import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_locationsCreateWithoutOrder_locations_terminalsInput } from './order-locations-create-without-order-locations-terminals.input';
import { Type } from 'class-transformer';
import { order_locationsCreateOrConnectWithoutOrder_locations_terminalsInput } from './order-locations-create-or-connect-without-order-locations-terminals.input';
import { order_locationsUpsertWithWhereUniqueWithoutOrder_locations_terminalsInput } from './order-locations-upsert-with-where-unique-without-order-locations-terminals.input';
import { order_locationsCreateManyOrder_locations_terminalsInputEnvelope } from './order-locations-create-many-order-locations-terminals-input-envelope.input';
import { order_locationsWhereUniqueInput } from './order-locations-where-unique.input';
import { order_locationsUpdateWithWhereUniqueWithoutOrder_locations_terminalsInput } from './order-locations-update-with-where-unique-without-order-locations-terminals.input';
import { order_locationsUpdateManyWithWhereWithoutOrder_locations_terminalsInput } from './order-locations-update-many-with-where-without-order-locations-terminals.input';
import { order_locationsScalarWhereInput } from './order-locations-scalar-where.input';

@InputType()
export class order_locationsUpdateManyWithoutOrder_locations_terminalsNestedInput {

    @Field(() => [order_locationsCreateWithoutOrder_locations_terminalsInput], {nullable:true})
    @Type(() => order_locationsCreateWithoutOrder_locations_terminalsInput)
    create?: Array<order_locationsCreateWithoutOrder_locations_terminalsInput>;

    @Field(() => [order_locationsCreateOrConnectWithoutOrder_locations_terminalsInput], {nullable:true})
    @Type(() => order_locationsCreateOrConnectWithoutOrder_locations_terminalsInput)
    connectOrCreate?: Array<order_locationsCreateOrConnectWithoutOrder_locations_terminalsInput>;

    @Field(() => [order_locationsUpsertWithWhereUniqueWithoutOrder_locations_terminalsInput], {nullable:true})
    @Type(() => order_locationsUpsertWithWhereUniqueWithoutOrder_locations_terminalsInput)
    upsert?: Array<order_locationsUpsertWithWhereUniqueWithoutOrder_locations_terminalsInput>;

    @Field(() => order_locationsCreateManyOrder_locations_terminalsInputEnvelope, {nullable:true})
    @Type(() => order_locationsCreateManyOrder_locations_terminalsInputEnvelope)
    createMany?: order_locationsCreateManyOrder_locations_terminalsInputEnvelope;

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

    @Field(() => [order_locationsUpdateWithWhereUniqueWithoutOrder_locations_terminalsInput], {nullable:true})
    @Type(() => order_locationsUpdateWithWhereUniqueWithoutOrder_locations_terminalsInput)
    update?: Array<order_locationsUpdateWithWhereUniqueWithoutOrder_locations_terminalsInput>;

    @Field(() => [order_locationsUpdateManyWithWhereWithoutOrder_locations_terminalsInput], {nullable:true})
    @Type(() => order_locationsUpdateManyWithWhereWithoutOrder_locations_terminalsInput)
    updateMany?: Array<order_locationsUpdateManyWithWhereWithoutOrder_locations_terminalsInput>;

    @Field(() => [order_locationsScalarWhereInput], {nullable:true})
    @Type(() => order_locationsScalarWhereInput)
    deleteMany?: Array<order_locationsScalarWhereInput>;
}
