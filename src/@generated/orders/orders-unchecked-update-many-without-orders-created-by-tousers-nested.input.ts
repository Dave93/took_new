import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersCreateWithoutOrders_created_byTousersInput } from './orders-create-without-orders-created-by-tousers.input';
import { Type } from 'class-transformer';
import { ordersCreateOrConnectWithoutOrders_created_byTousersInput } from './orders-create-or-connect-without-orders-created-by-tousers.input';
import { ordersUpsertWithWhereUniqueWithoutOrders_created_byTousersInput } from './orders-upsert-with-where-unique-without-orders-created-by-tousers.input';
import { ordersCreateManyOrders_created_byTousersInputEnvelope } from './orders-create-many-orders-created-by-tousers-input-envelope.input';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { ordersUpdateWithWhereUniqueWithoutOrders_created_byTousersInput } from './orders-update-with-where-unique-without-orders-created-by-tousers.input';
import { ordersUpdateManyWithWhereWithoutOrders_created_byTousersInput } from './orders-update-many-with-where-without-orders-created-by-tousers.input';
import { ordersScalarWhereInput } from './orders-scalar-where.input';

@InputType()
export class ordersUncheckedUpdateManyWithoutOrders_created_byTousersNestedInput {

    @Field(() => [ordersCreateWithoutOrders_created_byTousersInput], {nullable:true})
    @Type(() => ordersCreateWithoutOrders_created_byTousersInput)
    create?: Array<ordersCreateWithoutOrders_created_byTousersInput>;

    @Field(() => [ordersCreateOrConnectWithoutOrders_created_byTousersInput], {nullable:true})
    @Type(() => ordersCreateOrConnectWithoutOrders_created_byTousersInput)
    connectOrCreate?: Array<ordersCreateOrConnectWithoutOrders_created_byTousersInput>;

    @Field(() => [ordersUpsertWithWhereUniqueWithoutOrders_created_byTousersInput], {nullable:true})
    @Type(() => ordersUpsertWithWhereUniqueWithoutOrders_created_byTousersInput)
    upsert?: Array<ordersUpsertWithWhereUniqueWithoutOrders_created_byTousersInput>;

    @Field(() => ordersCreateManyOrders_created_byTousersInputEnvelope, {nullable:true})
    @Type(() => ordersCreateManyOrders_created_byTousersInputEnvelope)
    createMany?: ordersCreateManyOrders_created_byTousersInputEnvelope;

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

    @Field(() => [ordersUpdateWithWhereUniqueWithoutOrders_created_byTousersInput], {nullable:true})
    @Type(() => ordersUpdateWithWhereUniqueWithoutOrders_created_byTousersInput)
    update?: Array<ordersUpdateWithWhereUniqueWithoutOrders_created_byTousersInput>;

    @Field(() => [ordersUpdateManyWithWhereWithoutOrders_created_byTousersInput], {nullable:true})
    @Type(() => ordersUpdateManyWithWhereWithoutOrders_created_byTousersInput)
    updateMany?: Array<ordersUpdateManyWithWhereWithoutOrders_created_byTousersInput>;

    @Field(() => [ordersScalarWhereInput], {nullable:true})
    @Type(() => ordersScalarWhereInput)
    deleteMany?: Array<ordersScalarWhereInput>;
}
