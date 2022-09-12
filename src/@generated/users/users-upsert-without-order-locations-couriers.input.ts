import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutOrder_locations_couriersInput } from './users-update-without-order-locations-couriers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutOrder_locations_couriersInput } from './users-create-without-order-locations-couriers.input';

@InputType()
export class usersUpsertWithoutOrder_locations_couriersInput {

    @Field(() => usersUpdateWithoutOrder_locations_couriersInput, {nullable:false})
    @Type(() => usersUpdateWithoutOrder_locations_couriersInput)
    update!: usersUpdateWithoutOrder_locations_couriersInput;

    @Field(() => usersCreateWithoutOrder_locations_couriersInput, {nullable:false})
    @Type(() => usersCreateWithoutOrder_locations_couriersInput)
    create!: usersCreateWithoutOrder_locations_couriersInput;
}
