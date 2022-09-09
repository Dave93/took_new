import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationUpdateWithoutOrders_organizationInput } from './organization-update-without-orders-organization.input';
import { Type } from 'class-transformer';
import { organizationCreateWithoutOrders_organizationInput } from './organization-create-without-orders-organization.input';

@InputType()
export class organizationUpsertWithoutOrders_organizationInput {

    @Field(() => organizationUpdateWithoutOrders_organizationInput, {nullable:false})
    @Type(() => organizationUpdateWithoutOrders_organizationInput)
    update!: organizationUpdateWithoutOrders_organizationInput;

    @Field(() => organizationCreateWithoutOrders_organizationInput, {nullable:false})
    @Type(() => organizationCreateWithoutOrders_organizationInput)
    create!: organizationCreateWithoutOrders_organizationInput;
}
