import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organization_payment_types } from '../organization/organization-payment-types.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumorganization_payment_typesFilter } from './nested-enumorganization-payment-types-filter.input';

@InputType()
export class NestedEnumorganization_payment_typesWithAggregatesFilter {

    @Field(() => organization_payment_types, {nullable:true})
    equals?: keyof typeof organization_payment_types;

    @Field(() => [organization_payment_types], {nullable:true})
    in?: Array<keyof typeof organization_payment_types>;

    @Field(() => [organization_payment_types], {nullable:true})
    notIn?: Array<keyof typeof organization_payment_types>;

    @Field(() => NestedEnumorganization_payment_typesWithAggregatesFilter, {nullable:true})
    not?: NestedEnumorganization_payment_typesWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumorganization_payment_typesFilter, {nullable:true})
    _min?: NestedEnumorganization_payment_typesFilter;

    @Field(() => NestedEnumorganization_payment_typesFilter, {nullable:true})
    _max?: NestedEnumorganization_payment_typesFilter;
}
