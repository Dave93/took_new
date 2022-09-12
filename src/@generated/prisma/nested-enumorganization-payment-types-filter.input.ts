import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organization_payment_types } from '../organization/organization-payment-types.enum';

@InputType()
export class NestedEnumorganization_payment_typesFilter {

    @Field(() => organization_payment_types, {nullable:true})
    equals?: keyof typeof organization_payment_types;

    @Field(() => [organization_payment_types], {nullable:true})
    in?: Array<keyof typeof organization_payment_types>;

    @Field(() => [organization_payment_types], {nullable:true})
    notIn?: Array<keyof typeof organization_payment_types>;

    @Field(() => NestedEnumorganization_payment_typesFilter, {nullable:true})
    not?: NestedEnumorganization_payment_typesFilter;
}
