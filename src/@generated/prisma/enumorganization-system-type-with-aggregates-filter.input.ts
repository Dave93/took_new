import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organization_system_type } from '../organization/organization-system-type.enum';
import { NestedEnumorganization_system_typeWithAggregatesFilter } from './nested-enumorganization-system-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumorganization_system_typeFilter } from './nested-enumorganization-system-type-filter.input';

@InputType()
export class Enumorganization_system_typeWithAggregatesFilter {

    @Field(() => organization_system_type, {nullable:true})
    equals?: keyof typeof organization_system_type;

    @Field(() => [organization_system_type], {nullable:true})
    in?: Array<keyof typeof organization_system_type>;

    @Field(() => [organization_system_type], {nullable:true})
    notIn?: Array<keyof typeof organization_system_type>;

    @Field(() => NestedEnumorganization_system_typeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumorganization_system_typeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumorganization_system_typeFilter, {nullable:true})
    _min?: NestedEnumorganization_system_typeFilter;

    @Field(() => NestedEnumorganization_system_typeFilter, {nullable:true})
    _max?: NestedEnumorganization_system_typeFilter;
}
