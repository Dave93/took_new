import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutCourier_terminal_balance_created_byTousersInput } from './users-update-without-courier-terminal-balance-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutCourier_terminal_balance_created_byTousersInput } from './users-create-without-courier-terminal-balance-created-by-tousers.input';

@InputType()
export class usersUpsertWithoutCourier_terminal_balance_created_byTousersInput {

    @Field(() => usersUpdateWithoutCourier_terminal_balance_created_byTousersInput, {nullable:false})
    @Type(() => usersUpdateWithoutCourier_terminal_balance_created_byTousersInput)
    update!: usersUpdateWithoutCourier_terminal_balance_created_byTousersInput;

    @Field(() => usersCreateWithoutCourier_terminal_balance_created_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutCourier_terminal_balance_created_byTousersInput)
    create!: usersCreateWithoutCourier_terminal_balance_created_byTousersInput;
}
