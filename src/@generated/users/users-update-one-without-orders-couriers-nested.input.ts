import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutOrders_couriersInput } from './users-create-without-orders-couriers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutOrders_couriersInput } from './users-create-or-connect-without-orders-couriers.input';
import { usersUpsertWithoutOrders_couriersInput } from './users-upsert-without-orders-couriers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutOrders_couriersInput } from './users-update-without-orders-couriers.input';

@InputType()
export class usersUpdateOneWithoutOrders_couriersNestedInput {

    @Field(() => usersCreateWithoutOrders_couriersInput, {nullable:true})
    @Type(() => usersCreateWithoutOrders_couriersInput)
    create?: usersCreateWithoutOrders_couriersInput;

    @Field(() => usersCreateOrConnectWithoutOrders_couriersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutOrders_couriersInput)
    connectOrCreate?: usersCreateOrConnectWithoutOrders_couriersInput;

    @Field(() => usersUpsertWithoutOrders_couriersInput, {nullable:true})
    @Type(() => usersUpsertWithoutOrders_couriersInput)
    upsert?: usersUpsertWithoutOrders_couriersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutOrders_couriersInput, {nullable:true})
    @Type(() => usersUpdateWithoutOrders_couriersInput)
    update?: usersUpdateWithoutOrders_couriersInput;
}
