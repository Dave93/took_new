import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutCourier_terminal_balance_couriersInput } from './users-create-without-courier-terminal-balance-couriers.input';

@InputType()
export class usersCreateOrConnectWithoutCourier_terminal_balance_couriersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutCourier_terminal_balance_couriersInput, {nullable:false})
    @Type(() => usersCreateWithoutCourier_terminal_balance_couriersInput)
    create!: usersCreateWithoutCourier_terminal_balance_couriersInput;
}
