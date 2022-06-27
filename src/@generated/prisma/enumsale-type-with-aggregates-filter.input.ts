import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { sale_type } from './sale-type.enum';
import { NestedEnumsale_typeWithAggregatesFilter } from './nested-enumsale-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumsale_typeFilter } from './nested-enumsale-type-filter.input';

@InputType()
export class Enumsale_typeWithAggregatesFilter {

    @Field(() => sale_type, {nullable:true})
    equals?: keyof typeof sale_type;

    @Field(() => [sale_type], {nullable:true})
    in?: Array<keyof typeof sale_type>;

    @Field(() => [sale_type], {nullable:true})
    notIn?: Array<keyof typeof sale_type>;

    @Field(() => NestedEnumsale_typeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumsale_typeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumsale_typeFilter, {nullable:true})
    _min?: NestedEnumsale_typeFilter;

    @Field(() => NestedEnumsale_typeFilter, {nullable:true})
    _max?: NestedEnumsale_typeFilter;
}
