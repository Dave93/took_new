import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutOrders_couriersInput } from './users-update-without-orders-couriers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutOrders_couriersInput } from './users-create-without-orders-couriers.input';

@InputType()
export class usersUpsertWithoutOrders_couriersInput {

    @Field(() => usersUpdateWithoutOrders_couriersInput, {nullable:false})
    @Type(() => usersUpdateWithoutOrders_couriersInput)
    update!: usersUpdateWithoutOrders_couriersInput;

    @Field(() => usersCreateWithoutOrders_couriersInput, {nullable:false})
    @Type(() => usersCreateWithoutOrders_couriersInput)
    create!: usersCreateWithoutOrders_couriersInput;
}
