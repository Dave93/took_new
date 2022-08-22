import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { drive_type } from './drive-type.enum';
import { NestedEnumdrive_typeWithAggregatesFilter } from './nested-enumdrive-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumdrive_typeFilter } from './nested-enumdrive-type-filter.input';

@InputType()
export class Enumdrive_typeWithAggregatesFilter {

    @Field(() => drive_type, {nullable:true})
    equals?: keyof typeof drive_type;

    @Field(() => [drive_type], {nullable:true})
    in?: Array<keyof typeof drive_type>;

    @Field(() => [drive_type], {nullable:true})
    notIn?: Array<keyof typeof drive_type>;

    @Field(() => NestedEnumdrive_typeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumdrive_typeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumdrive_typeFilter, {nullable:true})
    _min?: NestedEnumdrive_typeFilter;

    @Field(() => NestedEnumdrive_typeFilter, {nullable:true})
    _max?: NestedEnumdrive_typeFilter;
}
