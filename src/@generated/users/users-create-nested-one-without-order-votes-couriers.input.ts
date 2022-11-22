import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutOrder_votes_couriersInput } from './users-create-without-order-votes-couriers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutOrder_votes_couriersInput } from './users-create-or-connect-without-order-votes-couriers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutOrder_votes_couriersInput {

    @Field(() => usersCreateWithoutOrder_votes_couriersInput, {nullable:true})
    @Type(() => usersCreateWithoutOrder_votes_couriersInput)
    create?: usersCreateWithoutOrder_votes_couriersInput;

    @Field(() => usersCreateOrConnectWithoutOrder_votes_couriersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutOrder_votes_couriersInput)
    connectOrCreate?: usersCreateOrConnectWithoutOrder_votes_couriersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}
