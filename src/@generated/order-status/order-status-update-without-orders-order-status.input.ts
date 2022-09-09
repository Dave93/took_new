import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { organizationUpdateOneRequiredWithoutOrder_status_organizationNestedInput } from '../organization/organization-update-one-required-without-order-status-organization-nested.input';

@InputType()
export class order_statusUpdateWithoutOrders_order_statusInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

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

    @Field(() => organizationUpdateOneRequiredWithoutOrder_status_organizationNestedInput, {nullable:true})
    order_status_organization?: organizationUpdateOneRequiredWithoutOrder_status_organizationNestedInput;
}
