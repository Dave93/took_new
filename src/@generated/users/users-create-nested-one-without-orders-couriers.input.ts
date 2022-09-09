import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutOrders_couriersInput } from './users-create-without-orders-couriers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutOrders_couriersInput } from './users-create-or-connect-without-orders-couriers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutOrders_couriersInput {

    @Field(() => usersCreateWithoutOrders_couriersInput, {nullable:true})
    @Type(() => usersCreateWithoutOrders_couriersInput)
    create?: usersCreateWithoutOrders_couriersInput;

    @Field(() => usersCreateOrConnectWithoutOrders_couriersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutOrders_couriersInput)
    connectOrCreate?: usersCreateOrConnectWithoutOrders_couriersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}
