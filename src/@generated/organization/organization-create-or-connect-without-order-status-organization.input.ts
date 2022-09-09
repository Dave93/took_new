import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationWhereUniqueInput } from './organization-where-unique.input';
import { Type } from 'class-transformer';
import { organizationCreateWithoutOrder_status_organizationInput } from './organization-create-without-order-status-organization.input';

@InputType()
export class organizationCreateOrConnectWithoutOrder_status_organizationInput {

    @Field(() => organizationWhereUniqueInput, {nullable:false})
    @Type(() => organizationWhereUniqueInput)
    where!: organizationWhereUniqueInput;

    @Field(() => organizationCreateWithoutOrder_status_organizationInput, {nullable:false})
    @Type(() => organizationCreateWithoutOrder_status_organizationInput)
    create!: organizationCreateWithoutOrder_status_organizationInput;
}
