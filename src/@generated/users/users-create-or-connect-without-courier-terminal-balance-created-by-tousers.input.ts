import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutCourier_terminal_balance_created_byTousersInput } from './users-create-without-courier-terminal-balance-created-by-tousers.input';

@InputType()
export class usersCreateOrConnectWithoutCourier_terminal_balance_created_byTousersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutCourier_terminal_balance_created_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutCourier_terminal_balance_created_byTousersInput)
    create!: usersCreateWithoutCourier_terminal_balance_created_byTousersInput;
}
