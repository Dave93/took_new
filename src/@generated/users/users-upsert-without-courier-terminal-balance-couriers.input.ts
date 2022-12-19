import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutCourier_terminal_balance_couriersInput } from './users-update-without-courier-terminal-balance-couriers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutCourier_terminal_balance_couriersInput } from './users-create-without-courier-terminal-balance-couriers.input';

@InputType()
export class usersUpsertWithoutCourier_terminal_balance_couriersInput {

    @Field(() => usersUpdateWithoutCourier_terminal_balance_couriersInput, {nullable:false})
    @Type(() => usersUpdateWithoutCourier_terminal_balance_couriersInput)
    update!: usersUpdateWithoutCourier_terminal_balance_couriersInput;

    @Field(() => usersCreateWithoutCourier_terminal_balance_couriersInput, {nullable:false})
    @Type(() => usersCreateWithoutCourier_terminal_balance_couriersInput)
    create!: usersCreateWithoutCourier_terminal_balance_couriersInput;
}
