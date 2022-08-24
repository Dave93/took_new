import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organization_system_type } from '../organization/organization-system-type.enum';
import { NestedEnumorganization_system_typeFilter } from './nested-enumorganization-system-type-filter.input';

@InputType()
export class Enumorganization_system_typeFilter {

    @Field(() => organization_system_type, {nullable:true})
    equals?: keyof typeof organization_system_type;

    @Field(() => [organization_system_type], {nullable:true})
    in?: Array<keyof typeof organization_system_type>;

    @Field(() => [organization_system_type], {nullable:true})
    notIn?: Array<keyof typeof organization_system_type>;

    @Field(() => NestedEnumorganization_system_typeFilter, {nullable:true})
    not?: NestedEnumorganization_system_typeFilter;
}
