import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutCourier_terminal_balance_created_byTousersInput } from './users-create-without-courier-terminal-balance-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutCourier_terminal_balance_created_byTousersInput } from './users-create-or-connect-without-courier-terminal-balance-created-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutCourier_terminal_balance_created_byTousersInput {

    @Field(() => usersCreateWithoutCourier_terminal_balance_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutCourier_terminal_balance_created_byTousersInput)
    create?: usersCreateWithoutCourier_terminal_balance_created_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutCourier_terminal_balance_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutCourier_terminal_balance_created_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutCourier_terminal_balance_created_byTousersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}
