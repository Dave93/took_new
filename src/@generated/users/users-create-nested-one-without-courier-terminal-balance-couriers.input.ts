import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutCourier_terminal_balance_couriersInput } from './users-create-without-courier-terminal-balance-couriers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutCourier_terminal_balance_couriersInput } from './users-create-or-connect-without-courier-terminal-balance-couriers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutCourier_terminal_balance_couriersInput {

    @Field(() => usersCreateWithoutCourier_terminal_balance_couriersInput, {nullable:true})
    @Type(() => usersCreateWithoutCourier_terminal_balance_couriersInput)
    create?: usersCreateWithoutCourier_terminal_balance_couriersInput;

    @Field(() => usersCreateOrConnectWithoutCourier_terminal_balance_couriersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutCourier_terminal_balance_couriersInput)
    connectOrCreate?: usersCreateOrConnectWithoutCourier_terminal_balance_couriersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}
