import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { price_type } from './price-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumprice_typeFilter } from './nested-enumprice-type-filter.input';

@InputType()
export class NestedEnumprice_typeWithAggregatesFilter {

    @Field(() => price_type, {nullable:true})
    equals?: keyof typeof price_type;

    @Field(() => [price_type], {nullable:true})
    in?: Array<keyof typeof price_type>;

    @Field(() => [price_type], {nullable:true})
    notIn?: Array<keyof typeof price_type>;

    @Field(() => NestedEnumprice_typeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumprice_typeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumprice_typeFilter, {nullable:true})
    _min?: NestedEnumprice_typeFilter;

    @Field(() => NestedEnumprice_typeFilter, {nullable:true})
    _max?: NestedEnumprice_typeFilter;
}
