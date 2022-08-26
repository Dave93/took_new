import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { drive_type } from './drive-type.enum';
import { NestedEnumdrive_typeNullableFilter } from './nested-enumdrive-type-nullable-filter.input';

@InputType()
export class Enumdrive_typeNullableFilter {

    @Field(() => drive_type, {nullable:true})
    equals?: keyof typeof drive_type;

    @Field(() => [drive_type], {nullable:true})
    in?: Array<keyof typeof drive_type>;

    @Field(() => [drive_type], {nullable:true})
    notIn?: Array<keyof typeof drive_type>;

    @Field(() => NestedEnumdrive_typeNullableFilter, {nullable:true})
    not?: NestedEnumdrive_typeNullableFilter;
}
