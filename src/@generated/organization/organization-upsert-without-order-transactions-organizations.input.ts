import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationUpdateWithoutOrder_transactions_organizationsInput } from './organization-update-without-order-transactions-organizations.input';
import { Type } from 'class-transformer';
import { organizationCreateWithoutOrder_transactions_organizationsInput } from './organization-create-without-order-transactions-organizations.input';

@InputType()
export class organizationUpsertWithoutOrder_transactions_organizationsInput {

    @Field(() => organizationUpdateWithoutOrder_transactions_organizationsInput, {nullable:false})
    @Type(() => organizationUpdateWithoutOrder_transactions_organizationsInput)
    update!: organizationUpdateWithoutOrder_transactions_organizationsInput;

    @Field(() => organizationCreateWithoutOrder_transactions_organizationsInput, {nullable:false})
    @Type(() => organizationCreateWithoutOrder_transactions_organizationsInput)
    create!: organizationCreateWithoutOrder_transactions_organizationsInput;
}
