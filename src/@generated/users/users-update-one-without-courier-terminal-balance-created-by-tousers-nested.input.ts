import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutCourier_terminal_balance_created_byTousersInput } from './users-create-without-courier-terminal-balance-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutCourier_terminal_balance_created_byTousersInput } from './users-create-or-connect-without-courier-terminal-balance-created-by-tousers.input';
import { usersUpsertWithoutCourier_terminal_balance_created_byTousersInput } from './users-upsert-without-courier-terminal-balance-created-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutCourier_terminal_balance_created_byTousersInput } from './users-update-without-courier-terminal-balance-created-by-tousers.input';

@InputType()
export class usersUpdateOneWithoutCourier_terminal_balance_created_byTousersNestedInput {

    @Field(() => usersCreateWithoutCourier_terminal_balance_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutCourier_terminal_balance_created_byTousersInput)
    create?: usersCreateWithoutCourier_terminal_balance_created_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutCourier_terminal_balance_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutCourier_terminal_balance_created_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutCourier_terminal_balance_created_byTousersInput;

    @Field(() => usersUpsertWithoutCourier_terminal_balance_created_byTousersInput, {nullable:true})
    @Type(() => usersUpsertWithoutCourier_terminal_balance_created_byTousersInput)
    upsert?: usersUpsertWithoutCourier_terminal_balance_created_byTousersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutCourier_terminal_balance_created_byTousersInput, {nullable:true})
    @Type(() => usersUpdateWithoutCourier_terminal_balance_created_byTousersInput)
    update?: usersUpdateWithoutCourier_terminal_balance_created_byTousersInput;
}
