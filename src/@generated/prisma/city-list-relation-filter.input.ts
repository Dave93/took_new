import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cityWhereInput } from '../city/city-where.input';

@InputType()
export class CityListRelationFilter {

    @Field(() => cityWhereInput, {nullable:true})
    every?: cityWhereInput;

    @Field(() => cityWhereInput, {nullable:true})
    some?: cityWhereInput;

    @Field(() => cityWhereInput, {nullable:true})
    none?: cityWhereInput;
}
