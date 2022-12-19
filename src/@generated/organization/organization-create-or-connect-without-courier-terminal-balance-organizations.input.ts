import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationWhereUniqueInput } from './organization-where-unique.input';
import { Type } from 'class-transformer';
import { organizationCreateWithoutCourier_terminal_balance_organizationsInput } from './organization-create-without-courier-terminal-balance-organizations.input';

@InputType()
export class organizationCreateOrConnectWithoutCourier_terminal_balance_organizationsInput {

    @Field(() => organizationWhereUniqueInput, {nullable:false})
    @Type(() => organizationWhereUniqueInput)
    where!: organizationWhereUniqueInput;

    @Field(() => organizationCreateWithoutCourier_terminal_balance_organizationsInput, {nullable:false})
    @Type(() => organizationCreateWithoutCourier_terminal_balance_organizationsInput)
    create!: organizationCreateWithoutCourier_terminal_balance_organizationsInput;
}
