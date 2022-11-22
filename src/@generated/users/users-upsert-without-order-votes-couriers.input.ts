import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutOrder_votes_couriersInput } from './users-update-without-order-votes-couriers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutOrder_votes_couriersInput } from './users-create-without-order-votes-couriers.input';

@InputType()
export class usersUpsertWithoutOrder_votes_couriersInput {

    @Field(() => usersUpdateWithoutOrder_votes_couriersInput, {nullable:false})
    @Type(() => usersUpdateWithoutOrder_votes_couriersInput)
    update!: usersUpdateWithoutOrder_votes_couriersInput;

    @Field(() => usersCreateWithoutOrder_votes_couriersInput, {nullable:false})
    @Type(() => usersCreateWithoutOrder_votes_couriersInput)
    create!: usersCreateWithoutOrder_votes_couriersInput;
}
