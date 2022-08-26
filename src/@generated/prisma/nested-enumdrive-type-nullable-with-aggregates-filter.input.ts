import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { drive_type } from './drive-type.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumdrive_typeNullableFilter } from './nested-enumdrive-type-nullable-filter.input';

@InputType()
export class NestedEnumdrive_typeNullableWithAggregatesFilter {

    @Field(() => drive_type, {nullable:true})
    equals?: keyof typeof drive_type;

    @Field(() => [drive_type], {nullable:true})
    in?: Array<keyof typeof drive_type>;

    @Field(() => [drive_type], {nullable:true})
    notIn?: Array<keyof typeof drive_type>;

    @Field(() => NestedEnumdrive_typeNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumdrive_typeNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumdrive_typeNullableFilter, {nullable:true})
    _min?: NestedEnumdrive_typeNullableFilter;

    @Field(() => NestedEnumdrive_typeNullableFilter, {nullable:true})
    _max?: NestedEnumdrive_typeNullableFilter;
}
