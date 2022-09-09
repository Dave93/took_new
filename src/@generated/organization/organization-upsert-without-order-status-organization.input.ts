import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationUpdateWithoutOrder_status_organizationInput } from './organization-update-without-order-status-organization.input';
import { Type } from 'class-transformer';
import { organizationCreateWithoutOrder_status_organizationInput } from './organization-create-without-order-status-organization.input';

@InputType()
export class organizationUpsertWithoutOrder_status_organizationInput {

    @Field(() => organizationUpdateWithoutOrder_status_organizationInput, {nullable:false})
    @Type(() => organizationUpdateWithoutOrder_status_organizationInput)
    update!: organizationUpdateWithoutOrder_status_organizationInput;

    @Field(() => organizationCreateWithoutOrder_status_organizationInput, {nullable:false})
    @Type(() => organizationCreateWithoutOrder_status_organizationInput)
    create!: organizationCreateWithoutOrder_status_organizationInput;
}
