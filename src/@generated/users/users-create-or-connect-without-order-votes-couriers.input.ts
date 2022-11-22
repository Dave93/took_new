import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutOrder_votes_couriersInput } from './users-create-without-order-votes-couriers.input';

@InputType()
export class usersCreateOrConnectWithoutOrder_votes_couriersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutOrder_votes_couriersInput, {nullable:false})
    @Type(() => usersCreateWithoutOrder_votes_couriersInput)
    create!: usersCreateWithoutOrder_votes_couriersInput;
}
