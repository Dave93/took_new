import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organization_payment_types } from '../organization/organization-payment-types.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumorganization_payment_typesNullableFilter } from './nested-enumorganization-payment-types-nullable-filter.input';

@InputType()
export class NestedEnumorganization_payment_typesNullableWithAggregatesFilter {

    @Field(() => organization_payment_types, {nullable:true})
    equals?: keyof typeof organization_payment_types;

    @Field(() => [organization_payment_types], {nullable:true})
    in?: Array<keyof typeof organization_payment_types>;

    @Field(() => [organization_payment_types], {nullable:true})
    notIn?: Array<keyof typeof organization_payment_types>;

    @Field(() => NestedEnumorganization_payment_typesNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumorganization_payment_typesNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumorganization_payment_typesNullableFilter, {nullable:true})
    _min?: NestedEnumorganization_payment_typesNullableFilter;

    @Field(() => NestedEnumorganization_payment_typesNullableFilter, {nullable:true})
    _max?: NestedEnumorganization_payment_typesNullableFilter;
}
