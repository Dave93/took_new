import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationCreateWithoutOrder_status_organizationInput } from './organization-create-without-order-status-organization.input';
import { Type } from 'class-transformer';
import { organizationCreateOrConnectWithoutOrder_status_organizationInput } from './organization-create-or-connect-without-order-status-organization.input';
import { organizationUpsertWithoutOrder_status_organizationInput } from './organization-upsert-without-order-status-organization.input';
import { organizationWhereUniqueInput } from './organization-where-unique.input';
import { organizationUpdateWithoutOrder_status_organizationInput } from './organization-update-without-order-status-organization.input';

@InputType()
export class organizationUpdateOneRequiredWithoutOrder_status_organizationNestedInput {

    @Field(() => organizationCreateWithoutOrder_status_organizationInput, {nullable:true})
    @Type(() => organizationCreateWithoutOrder_status_organizationInput)
    create?: organizationCreateWithoutOrder_status_organizationInput;

    @Field(() => organizationCreateOrConnectWithoutOrder_status_organizationInput, {nullable:true})
    @Type(() => organizationCreateOrConnectWithoutOrder_status_organizationInput)
    connectOrCreate?: organizationCreateOrConnectWithoutOrder_status_organizationInput;

    @Field(() => organizationUpsertWithoutOrder_status_organizationInput, {nullable:true})
    @Type(() => organizationUpsertWithoutOrder_status_organizationInput)
    upsert?: organizationUpsertWithoutOrder_status_organizationInput;

    @Field(() => organizationWhereUniqueInput, {nullable:true})
    @Type(() => organizationWhereUniqueInput)
    connect?: organizationWhereUniqueInput;

    @Field(() => organizationUpdateWithoutOrder_status_organizationInput, {nullable:true})
    @Type(() => organizationUpdateWithoutOrder_status_organizationInput)
    update?: organizationUpdateWithoutOrder_status_organizationInput;
}
