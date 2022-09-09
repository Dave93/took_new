import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationWhereUniqueInput } from './organization-where-unique.input';
import { Type } from 'class-transformer';
import { organizationCreateWithoutOrders_organizationInput } from './organization-create-without-orders-organization.input';

@InputType()
export class organizationCreateOrConnectWithoutOrders_organizationInput {

    @Field(() => organizationWhereUniqueInput, {nullable:false})
    @Type(() => organizationWhereUniqueInput)
    where!: organizationWhereUniqueInput;

    @Field(() => organizationCreateWithoutOrders_organizationInput, {nullable:false})
    @Type(() => organizationCreateWithoutOrders_organizationInput)
    create!: organizationCreateWithoutOrders_organizationInput;
}
