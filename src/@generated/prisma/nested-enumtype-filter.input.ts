import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { type } from './type.enum';

@InputType()
export class NestedEnumtypeFilter {

    @Field(() => type, {nullable:true})
    equals?: keyof typeof type;

    @Field(() => [type], {nullable:true})
    in?: Array<keyof typeof type>;

    @Field(() => [type], {nullable:true})
    notIn?: Array<keyof typeof type>;

    @Field(() => NestedEnumtypeFilter, {nullable:true})
    not?: NestedEnumtypeFilter;
}
