import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_locationsCreateWithoutOrder_locations_created_byTousersInput } from './order-locations-create-without-order-locations-created-by-tousers.input';
import { Type } from 'class-transformer';
import { order_locationsCreateOrConnectWithoutOrder_locations_created_byTousersInput } from './order-locations-create-or-connect-without-order-locations-created-by-tousers.input';
import { order_locationsUpsertWithWhereUniqueWithoutOrder_locations_created_byTousersInput } from './order-locations-upsert-with-where-unique-without-order-locations-created-by-tousers.input';
import { order_locationsCreateManyOrder_locations_created_byTousersInputEnvelope } from './order-locations-create-many-order-locations-created-by-tousers-input-envelope.input';
import { order_locationsWhereUniqueInput } from './order-locations-where-unique.input';
import { order_locationsUpdateWithWhereUniqueWithoutOrder_locations_created_byTousersInput } from './order-locations-update-with-where-unique-without-order-locations-created-by-tousers.input';
import { order_locationsUpdateManyWithWhereWithoutOrder_locations_created_byTousersInput } from './order-locations-update-many-with-where-without-order-locations-created-by-tousers.input';
import { order_locationsScalarWhereInput } from './order-locations-scalar-where.input';

@InputType()
export class order_locationsUpdateManyWithoutOrder_locations_created_byTousersNestedInput {

    @Field(() => [order_locationsCreateWithoutOrder_locations_created_byTousersInput], {nullable:true})
    @Type(() => order_locationsCreateWithoutOrder_locations_created_byTousersInput)
    create?: Array<order_locationsCreateWithoutOrder_locations_created_byTousersInput>;

    @Field(() => [order_locationsCreateOrConnectWithoutOrder_locations_created_byTousersInput], {nullable:true})
    @Type(() => order_locationsCreateOrConnectWithoutOrder_locations_created_byTousersInput)
    connectOrCreate?: Array<order_locationsCreateOrConnectWithoutOrder_locations_created_byTousersInput>;

    @Field(() => [order_locationsUpsertWithWhereUniqueWithoutOrder_locations_created_byTousersInput], {nullable:true})
    @Type(() => order_locationsUpsertWithWhereUniqueWithoutOrder_locations_created_byTousersInput)
    upsert?: Array<order_locationsUpsertWithWhereUniqueWithoutOrder_locations_created_byTousersInput>;

    @Field(() => order_locationsCreateManyOrder_locations_created_byTousersInputEnvelope, {nullable:true})
    @Type(() => order_locationsCreateManyOrder_locations_created_byTousersInputEnvelope)
    createMany?: order_locationsCreateManyOrder_locations_created_byTousersInputEnvelope;

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

    @Field(() => [order_locationsUpdateWithWhereUniqueWithoutOrder_locations_created_byTousersInput], {nullable:true})
    @Type(() => order_locationsUpdateWithWhereUniqueWithoutOrder_locations_created_byTousersInput)
    update?: Array<order_locationsUpdateWithWhereUniqueWithoutOrder_locations_created_byTousersInput>;

    @Field(() => [order_locationsUpdateManyWithWhereWithoutOrder_locations_created_byTousersInput], {nullable:true})
    @Type(() => order_locationsUpdateManyWithWhereWithoutOrder_locations_created_byTousersInput)
    updateMany?: Array<order_locationsUpdateManyWithWhereWithoutOrder_locations_created_byTousersInput>;

    @Field(() => [order_locationsScalarWhereInput], {nullable:true})
    @Type(() => order_locationsScalarWhereInput)
    deleteMany?: Array<order_locationsScalarWhereInput>;
}
