import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationCreateWithoutCourier_terminal_balance_organizationsInput } from './organization-create-without-courier-terminal-balance-organizations.input';
import { Type } from 'class-transformer';
import { organizationCreateOrConnectWithoutCourier_terminal_balance_organizationsInput } from './organization-create-or-connect-without-courier-terminal-balance-organizations.input';
import { organizationWhereUniqueInput } from './organization-where-unique.input';

@InputType()
export class organizationCreateNestedOneWithoutCourier_terminal_balance_organizationsInput {

    @Field(() => organizationCreateWithoutCourier_terminal_balance_organizationsInput, {nullable:true})
    @Type(() => organizationCreateWithoutCourier_terminal_balance_organizationsInput)
    create?: organizationCreateWithoutCourier_terminal_balance_organizationsInput;

    @Field(() => organizationCreateOrConnectWithoutCourier_terminal_balance_organizationsInput, {nullable:true})
    @Type(() => organizationCreateOrConnectWithoutCourier_terminal_balance_organizationsInput)
    connectOrCreate?: organizationCreateOrConnectWithoutCourier_terminal_balance_organizationsInput;

    @Field(() => organizationWhereUniqueInput, {nullable:true})
    @Type(() => organizationWhereUniqueInput)
    connect?: organizationWhereUniqueInput;
}
