import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersCreateWithoutOrders_updated_byTousersInput } from './orders-create-without-orders-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { ordersCreateOrConnectWithoutOrders_updated_byTousersInput } from './orders-create-or-connect-without-orders-updated-by-tousers.input';
import { ordersUpsertWithWhereUniqueWithoutOrders_updated_byTousersInput } from './orders-upsert-with-where-unique-without-orders-updated-by-tousers.input';
import { ordersCreateManyOrders_updated_byTousersInputEnvelope } from './orders-create-many-orders-updated-by-tousers-input-envelope.input';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { ordersUpdateWithWhereUniqueWithoutOrders_updated_byTousersInput } from './orders-update-with-where-unique-without-orders-updated-by-tousers.input';
import { ordersUpdateManyWithWhereWithoutOrders_updated_byTousersInput } from './orders-update-many-with-where-without-orders-updated-by-tousers.input';
import { ordersScalarWhereInput } from './orders-scalar-where.input';

@InputType()
export class ordersUncheckedUpdateManyWithoutOrders_updated_byTousersNestedInput {

    @Field(() => [ordersCreateWithoutOrders_updated_byTousersInput], {nullable:true})
    @Type(() => ordersCreateWithoutOrders_updated_byTousersInput)
    create?: Array<ordersCreateWithoutOrders_updated_byTousersInput>;

    @Field(() => [ordersCreateOrConnectWithoutOrders_updated_byTousersInput], {nullable:true})
    @Type(() => ordersCreateOrConnectWithoutOrders_updated_byTousersInput)
    connectOrCreate?: Array<ordersCreateOrConnectWithoutOrders_updated_byTousersInput>;

    @Field(() => [ordersUpsertWithWhereUniqueWithoutOrders_updated_byTousersInput], {nullable:true})
    @Type(() => ordersUpsertWithWhereUniqueWithoutOrders_updated_byTousersInput)
    upsert?: Array<ordersUpsertWithWhereUniqueWithoutOrders_updated_byTousersInput>;

    @Field(() => ordersCreateManyOrders_updated_byTousersInputEnvelope, {nullable:true})
    @Type(() => ordersCreateManyOrders_updated_byTousersInputEnvelope)
    createMany?: ordersCreateManyOrders_updated_byTousersInputEnvelope;

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

    @Field(() => [ordersUpdateWithWhereUniqueWithoutOrders_updated_byTousersInput], {nullable:true})
    @Type(() => ordersUpdateWithWhereUniqueWithoutOrders_updated_byTousersInput)
    update?: Array<ordersUpdateWithWhereUniqueWithoutOrders_updated_byTousersInput>;

    @Field(() => [ordersUpdateManyWithWhereWithoutOrders_updated_byTousersInput], {nullable:true})
    @Type(() => ordersUpdateManyWithWhereWithoutOrders_updated_byTousersInput)
    updateMany?: Array<ordersUpdateManyWithWhereWithoutOrders_updated_byTousersInput>;

    @Field(() => [ordersScalarWhereInput], {nullable:true})
    @Type(() => ordersScalarWhereInput)
    deleteMany?: Array<ordersScalarWhereInput>;
}
