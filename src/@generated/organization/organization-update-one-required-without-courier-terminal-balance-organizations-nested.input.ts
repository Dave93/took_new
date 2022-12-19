import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationCreateWithoutCourier_terminal_balance_organizationsInput } from './organization-create-without-courier-terminal-balance-organizations.input';
import { Type } from 'class-transformer';
import { organizationCreateOrConnectWithoutCourier_terminal_balance_organizationsInput } from './organization-create-or-connect-without-courier-terminal-balance-organizations.input';
import { organizationUpsertWithoutCourier_terminal_balance_organizationsInput } from './organization-upsert-without-courier-terminal-balance-organizations.input';
import { organizationWhereUniqueInput } from './organization-where-unique.input';
import { organizationUpdateWithoutCourier_terminal_balance_organizationsInput } from './organization-update-without-courier-terminal-balance-organizations.input';

@InputType()
export class organizationUpdateOneRequiredWithoutCourier_terminal_balance_organizationsNestedInput {

    @Field(() => organizationCreateWithoutCourier_terminal_balance_organizationsInput, {nullable:true})
    @Type(() => organizationCreateWithoutCourier_terminal_balance_organizationsInput)
    create?: organizationCreateWithoutCourier_terminal_balance_organizationsInput;

    @Field(() => organizationCreateOrConnectWithoutCourier_terminal_balance_organizationsInput, {nullable:true})
    @Type(() => organizationCreateOrConnectWithoutCourier_terminal_balance_organizationsInput)
    connectOrCreate?: organizationCreateOrConnectWithoutCourier_terminal_balance_organizationsInput;

    @Field(() => organizationUpsertWithoutCourier_terminal_balance_organizationsInput, {nullable:true})
    @Type(() => organizationUpsertWithoutCourier_terminal_balance_organizationsInput)
    upsert?: organizationUpsertWithoutCourier_terminal_balance_organizationsInput;

    @Field(() => organizationWhereUniqueInput, {nullable:true})
    @Type(() => organizationWhereUniqueInput)
    connect?: organizationWhereUniqueInput;

    @Field(() => organizationUpdateWithoutCourier_terminal_balance_organizationsInput, {nullable:true})
    @Type(() => organizationUpdateWithoutCourier_terminal_balance_organizationsInput)
    update?: organizationUpdateWithoutCourier_terminal_balance_organizationsInput;
}
