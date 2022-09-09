import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationCreateWithoutOrders_organizationInput } from './organization-create-without-orders-organization.input';
import { Type } from 'class-transformer';
import { organizationCreateOrConnectWithoutOrders_organizationInput } from './organization-create-or-connect-without-orders-organization.input';
import { organizationUpsertWithoutOrders_organizationInput } from './organization-upsert-without-orders-organization.input';
import { organizationWhereUniqueInput } from './organization-where-unique.input';
import { organizationUpdateWithoutOrders_organizationInput } from './organization-update-without-orders-organization.input';

@InputType()
export class organizationUpdateOneRequiredWithoutOrders_organizationNestedInput {

    @Field(() => organizationCreateWithoutOrders_organizationInput, {nullable:true})
    @Type(() => organizationCreateWithoutOrders_organizationInput)
    create?: organizationCreateWithoutOrders_organizationInput;

    @Field(() => organizationCreateOrConnectWithoutOrders_organizationInput, {nullable:true})
    @Type(() => organizationCreateOrConnectWithoutOrders_organizationInput)
    connectOrCreate?: organizationCreateOrConnectWithoutOrders_organizationInput;

    @Field(() => organizationUpsertWithoutOrders_organizationInput, {nullable:true})
    @Type(() => organizationUpsertWithoutOrders_organizationInput)
    upsert?: organizationUpsertWithoutOrders_organizationInput;

    @Field(() => organizationWhereUniqueInput, {nullable:true})
    @Type(() => organizationWhereUniqueInput)
    connect?: organizationWhereUniqueInput;

    @Field(() => organizationUpdateWithoutOrders_organizationInput, {nullable:true})
    @Type(() => organizationUpdateWithoutOrders_organizationInput)
    update?: organizationUpdateWithoutOrders_organizationInput;
}
