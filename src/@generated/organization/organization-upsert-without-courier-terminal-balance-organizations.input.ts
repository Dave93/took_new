import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationUpdateWithoutCourier_terminal_balance_organizationsInput } from './organization-update-without-courier-terminal-balance-organizations.input';
import { Type } from 'class-transformer';
import { organizationCreateWithoutCourier_terminal_balance_organizationsInput } from './organization-create-without-courier-terminal-balance-organizations.input';

@InputType()
export class organizationUpsertWithoutCourier_terminal_balance_organizationsInput {

    @Field(() => organizationUpdateWithoutCourier_terminal_balance_organizationsInput, {nullable:false})
    @Type(() => organizationUpdateWithoutCourier_terminal_balance_organizationsInput)
    update!: organizationUpdateWithoutCourier_terminal_balance_organizationsInput;

    @Field(() => organizationCreateWithoutCourier_terminal_balance_organizationsInput, {nullable:false})
    @Type(() => organizationCreateWithoutCourier_terminal_balance_organizationsInput)
    create!: organizationCreateWithoutCourier_terminal_balance_organizationsInput;
}
