import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutOrder_transactions_couriersInput } from './users-create-without-order-transactions-couriers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutOrder_transactions_couriersInput } from './users-create-or-connect-without-order-transactions-couriers.input';
import { usersUpsertWithoutOrder_transactions_couriersInput } from './users-upsert-without-order-transactions-couriers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutOrder_transactions_couriersInput } from './users-update-without-order-transactions-couriers.input';

@InputType()
export class usersUpdateOneRequiredWithoutOrder_transactions_couriersNestedInput {

    @Field(() => usersCreateWithoutOrder_transactions_couriersInput, {nullable:true})
    @Type(() => usersCreateWithoutOrder_transactions_couriersInput)
    create?: usersCreateWithoutOrder_transactions_couriersInput;

    @Field(() => usersCreateOrConnectWithoutOrder_transactions_couriersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutOrder_transactions_couriersInput)
    connectOrCreate?: usersCreateOrConnectWithoutOrder_transactions_couriersInput;

    @Field(() => usersUpsertWithoutOrder_transactions_couriersInput, {nullable:true})
    @Type(() => usersUpsertWithoutOrder_transactions_couriersInput)
    upsert?: usersUpsertWithoutOrder_transactions_couriersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutOrder_transactions_couriersInput, {nullable:true})
    @Type(() => usersUpdateWithoutOrder_transactions_couriersInput)
    update?: usersUpdateWithoutOrder_transactions_couriersInput;
}
