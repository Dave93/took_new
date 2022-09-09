import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersCreateWithoutOrders_organizationInput } from './orders-create-without-orders-organization.input';
import { Type } from 'class-transformer';
import { ordersCreateOrConnectWithoutOrders_organizationInput } from './orders-create-or-connect-without-orders-organization.input';
import { ordersUpsertWithWhereUniqueWithoutOrders_organizationInput } from './orders-upsert-with-where-unique-without-orders-organization.input';
import { ordersCreateManyOrders_organizationInputEnvelope } from './orders-create-many-orders-organization-input-envelope.input';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { ordersUpdateWithWhereUniqueWithoutOrders_organizationInput } from './orders-update-with-where-unique-without-orders-organization.input';
import { ordersUpdateManyWithWhereWithoutOrders_organizationInput } from './orders-update-many-with-where-without-orders-organization.input';
import { ordersScalarWhereInput } from './orders-scalar-where.input';

@InputType()
export class ordersUpdateManyWithoutOrders_organizationNestedInput {

    @Field(() => [ordersCreateWithoutOrders_organizationInput], {nullable:true})
    @Type(() => ordersCreateWithoutOrders_organizationInput)
    create?: Array<ordersCreateWithoutOrders_organizationInput>;

    @Field(() => [ordersCreateOrConnectWithoutOrders_organizationInput], {nullable:true})
    @Type(() => ordersCreateOrConnectWithoutOrders_organizationInput)
    connectOrCreate?: Array<ordersCreateOrConnectWithoutOrders_organizationInput>;

    @Field(() => [ordersUpsertWithWhereUniqueWithoutOrders_organizationInput], {nullable:true})
    @Type(() => ordersUpsertWithWhereUniqueWithoutOrders_organizationInput)
    upsert?: Array<ordersUpsertWithWhereUniqueWithoutOrders_organizationInput>;

    @Field(() => ordersCreateManyOrders_organizationInputEnvelope, {nullable:true})
    @Type(() => ordersCreateManyOrders_organizationInputEnvelope)
    createMany?: ordersCreateManyOrders_organizationInputEnvelope;

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

    @Field(() => [ordersUpdateWithWhereUniqueWithoutOrders_organizationInput], {nullable:true})
    @Type(() => ordersUpdateWithWhereUniqueWithoutOrders_organizationInput)
    update?: Array<ordersUpdateWithWhereUniqueWithoutOrders_organizationInput>;

    @Field(() => [ordersUpdateManyWithWhereWithoutOrders_organizationInput], {nullable:true})
    @Type(() => ordersUpdateManyWithWhereWithoutOrders_organizationInput)
    updateMany?: Array<ordersUpdateManyWithWhereWithoutOrders_organizationInput>;

    @Field(() => [ordersScalarWhereInput], {nullable:true})
    @Type(() => ordersScalarWhereInput)
    deleteMany?: Array<ordersScalarWhereInput>;
}
