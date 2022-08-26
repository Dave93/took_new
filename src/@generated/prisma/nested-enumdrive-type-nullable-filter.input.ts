import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { drive_type } from './drive-type.enum';

@InputType()
export class NestedEnumdrive_typeNullableFilter {

    @Field(() => drive_type, {nullable:true})
    equals?: keyof typeof drive_type;

    @Field(() => [drive_type], {nullable:true})
    in?: Array<keyof typeof drive_type>;

    @Field(() => [drive_type], {nullable:true})
    notIn?: Array<keyof typeof drive_type>;

    @Field(() => NestedEnumdrive_typeNullableFilter, {nullable:true})
    not?: NestedEnumdrive_typeNullableFilter;
}
