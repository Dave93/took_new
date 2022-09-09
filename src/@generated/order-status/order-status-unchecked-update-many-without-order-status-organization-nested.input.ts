import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_statusCreateWithoutOrder_status_organizationInput } from './order-status-create-without-order-status-organization.input';
import { Type } from 'class-transformer';
import { order_statusCreateOrConnectWithoutOrder_status_organizationInput } from './order-status-create-or-connect-without-order-status-organization.input';
import { order_statusUpsertWithWhereUniqueWithoutOrder_status_organizationInput } from './order-status-upsert-with-where-unique-without-order-status-organization.input';
import { order_statusCreateManyOrder_status_organizationInputEnvelope } from './order-status-create-many-order-status-organization-input-envelope.input';
import { order_statusWhereUniqueInput } from './order-status-where-unique.input';
import { order_statusUpdateWithWhereUniqueWithoutOrder_status_organizationInput } from './order-status-update-with-where-unique-without-order-status-organization.input';
import { order_statusUpdateManyWithWhereWithoutOrder_status_organizationInput } from './order-status-update-many-with-where-without-order-status-organization.input';
import { order_statusScalarWhereInput } from './order-status-scalar-where.input';

@InputType()
export class order_statusUncheckedUpdateManyWithoutOrder_status_organizationNestedInput {

    @Field(() => [order_statusCreateWithoutOrder_status_organizationInput], {nullable:true})
    @Type(() => order_statusCreateWithoutOrder_status_organizationInput)
    create?: Array<order_statusCreateWithoutOrder_status_organizationInput>;

    @Field(() => [order_statusCreateOrConnectWithoutOrder_status_organizationInput], {nullable:true})
    @Type(() => order_statusCreateOrConnectWithoutOrder_status_organizationInput)
    connectOrCreate?: Array<order_statusCreateOrConnectWithoutOrder_status_organizationInput>;

    @Field(() => [order_statusUpsertWithWhereUniqueWithoutOrder_status_organizationInput], {nullable:true})
    @Type(() => order_statusUpsertWithWhereUniqueWithoutOrder_status_organizationInput)
    upsert?: Array<order_statusUpsertWithWhereUniqueWithoutOrder_status_organizationInput>;

    @Field(() => order_statusCreateManyOrder_status_organizationInputEnvelope, {nullable:true})
    @Type(() => order_statusCreateManyOrder_status_organizationInputEnvelope)
    createMany?: order_statusCreateManyOrder_status_organizationInputEnvelope;

    @Field(() => [order_statusWhereUniqueInput], {nullable:true})
    @Type(() => order_statusWhereUniqueInput)
    set?: Array<order_statusWhereUniqueInput>;

    @Field(() => [order_statusWhereUniqueInput], {nullable:true})
    @Type(() => order_statusWhereUniqueInput)
    disconnect?: Array<order_statusWhereUniqueInput>;

    @Field(() => [order_statusWhereUniqueInput], {nullable:true})
    @Type(() => order_statusWhereUniqueInput)
    delete?: Array<order_statusWhereUniqueInput>;

    @Field(() => [order_statusWhereUniqueInput], {nullable:true})
    @Type(() => order_statusWhereUniqueInput)
    connect?: Array<order_statusWhereUniqueInput>;

    @Field(() => [order_statusUpdateWithWhereUniqueWithoutOrder_status_organizationInput], {nullable:true})
    @Type(() => order_statusUpdateWithWhereUniqueWithoutOrder_status_organizationInput)
    update?: Array<order_statusUpdateWithWhereUniqueWithoutOrder_status_organizationInput>;

    @Field(() => [order_statusUpdateManyWithWhereWithoutOrder_status_organizationInput], {nullable:true})
    @Type(() => order_statusUpdateManyWithWhereWithoutOrder_status_organizationInput)
    updateMany?: Array<order_statusUpdateManyWithWhereWithoutOrder_status_organizationInput>;

    @Field(() => [order_statusScalarWhereInput], {nullable:true})
    @Type(() => order_statusScalarWhereInput)
    deleteMany?: Array<order_statusScalarWhereInput>;
}
