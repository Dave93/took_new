import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organization_system_type } from '../organization/organization-system-type.enum';

@InputType()
export class NestedEnumorganization_system_typeFilter {

    @Field(() => organization_system_type, {nullable:true})
    equals?: keyof typeof organization_system_type;

    @Field(() => [organization_system_type], {nullable:true})
    in?: Array<keyof typeof organization_system_type>;

    @Field(() => [organization_system_type], {nullable:true})
    notIn?: Array<keyof typeof organization_system_type>;

    @Field(() => NestedEnumorganization_system_typeFilter, {nullable:true})
    not?: NestedEnumorganization_system_typeFilter;
}
