import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { drive_type } from './drive-type.enum';
import { NestedEnumdrive_typeFilter } from './nested-enumdrive-type-filter.input';

@InputType()
export class Enumdrive_typeFilter {

    @Field(() => drive_type, {nullable:true})
    equals?: keyof typeof drive_type;

    @Field(() => [drive_type], {nullable:true})
    in?: Array<keyof typeof drive_type>;

    @Field(() => [drive_type], {nullable:true})
    notIn?: Array<keyof typeof drive_type>;

    @Field(() => NestedEnumdrive_typeFilter, {nullable:true})
    not?: NestedEnumdrive_typeFilter;
}
