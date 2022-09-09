import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutOrders_couriersInput } from './users-create-without-orders-couriers.input';

@InputType()
export class usersCreateOrConnectWithoutOrders_couriersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutOrders_couriersInput, {nullable:false})
    @Type(() => usersCreateWithoutOrders_couriersInput)
    create!: usersCreateWithoutOrders_couriersInput;
}
