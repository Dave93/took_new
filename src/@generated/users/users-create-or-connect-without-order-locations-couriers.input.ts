import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutOrder_locations_couriersInput } from './users-create-without-order-locations-couriers.input';

@InputType()
export class usersCreateOrConnectWithoutOrder_locations_couriersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutOrder_locations_couriersInput, {nullable:false})
    @Type(() => usersCreateWithoutOrder_locations_couriersInput)
    create!: usersCreateWithoutOrder_locations_couriersInput;
}
