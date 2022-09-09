import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { organizationCreateNestedOneWithoutOrder_status_organizationInput } from '../organization/organization-create-nested-one-without-order-status-organization.input';

@InputType()
export class order_statusCreateWithoutOrders_order_statusInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:true})
    sort?: number;

    @Field(() => String, {nullable:true})
    color?: string;

    @Field(() => Boolean, {nullable:true})
    finish?: boolean;

    @Field(() => Boolean, {nullable:true})
    cancel?: boolean;

    @Field(() => Boolean, {nullable:true})
    waiting?: boolean;

    @Field(() => organizationCreateNestedOneWithoutOrder_status_organizationInput, {nullable:false})
    order_status_organization!: organizationCreateNestedOneWithoutOrder_status_organizationInput;
}
