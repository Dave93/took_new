import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { sale_type } from './sale-type.enum';

@InputType()
export class NestedEnumsale_typeFilter {

    @Field(() => sale_type, {nullable:true})
    equals?: keyof typeof sale_type;

    @Field(() => [sale_type], {nullable:true})
    in?: Array<keyof typeof sale_type>;

    @Field(() => [sale_type], {nullable:true})
    notIn?: Array<keyof typeof sale_type>;

    @Field(() => NestedEnumsale_typeFilter, {nullable:true})
    not?: NestedEnumsale_typeFilter;
}
