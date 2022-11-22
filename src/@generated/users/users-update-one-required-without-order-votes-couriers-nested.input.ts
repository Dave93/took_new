import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutOrder_votes_couriersInput } from './users-create-without-order-votes-couriers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutOrder_votes_couriersInput } from './users-create-or-connect-without-order-votes-couriers.input';
import { usersUpsertWithoutOrder_votes_couriersInput } from './users-upsert-without-order-votes-couriers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutOrder_votes_couriersInput } from './users-update-without-order-votes-couriers.input';

@InputType()
export class usersUpdateOneRequiredWithoutOrder_votes_couriersNestedInput {

    @Field(() => usersCreateWithoutOrder_votes_couriersInput, {nullable:true})
    @Type(() => usersCreateWithoutOrder_votes_couriersInput)
    create?: usersCreateWithoutOrder_votes_couriersInput;

    @Field(() => usersCreateOrConnectWithoutOrder_votes_couriersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutOrder_votes_couriersInput)
    connectOrCreate?: usersCreateOrConnectWithoutOrder_votes_couriersInput;

    @Field(() => usersUpsertWithoutOrder_votes_couriersInput, {nullable:true})
    @Type(() => usersUpsertWithoutOrder_votes_couriersInput)
    upsert?: usersUpsertWithoutOrder_votes_couriersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutOrder_votes_couriersInput, {nullable:true})
    @Type(() => usersUpdateWithoutOrder_votes_couriersInput)
    update?: usersUpdateWithoutOrder_votes_couriersInput;
}
