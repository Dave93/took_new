import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { type } from './type.enum';
import { NestedEnumtypeWithAggregatesFilter } from './nested-enumtype-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumtypeFilter } from './nested-enumtype-filter.input';

@InputType()
export class EnumtypeWithAggregatesFilter {

    @Field(() => type, {nullable:true})
    equals?: keyof typeof type;

    @Field(() => [type], {nullable:true})
    in?: Array<keyof typeof type>;

    @Field(() => [type], {nullable:true})
    notIn?: Array<keyof typeof type>;

    @Field(() => NestedEnumtypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumtypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumtypeFilter, {nullable:true})
    _min?: NestedEnumtypeFilter;

    @Field(() => NestedEnumtypeFilter, {nullable:true})
    _max?: NestedEnumtypeFilter;
}
