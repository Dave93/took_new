import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationCreateWithoutOrder_status_organizationInput } from './organization-create-without-order-status-organization.input';
import { Type } from 'class-transformer';
import { organizationCreateOrConnectWithoutOrder_status_organizationInput } from './organization-create-or-connect-without-order-status-organization.input';
import { organizationWhereUniqueInput } from './organization-where-unique.input';

@InputType()
export class organizationCreateNestedOneWithoutOrder_status_organizationInput {

    @Field(() => organizationCreateWithoutOrder_status_organizationInput, {nullable:true})
    @Type(() => organizationCreateWithoutOrder_status_organizationInput)
    create?: organizationCreateWithoutOrder_status_organizationInput;

    @Field(() => organizationCreateOrConnectWithoutOrder_status_organizationInput, {nullable:true})
    @Type(() => organizationCreateOrConnectWithoutOrder_status_organizationInput)
    connectOrCreate?: organizationCreateOrConnectWithoutOrder_status_organizationInput;

    @Field(() => organizationWhereUniqueInput, {nullable:true})
    @Type(() => organizationWhereUniqueInput)
    connect?: organizationWhereUniqueInput;
}
