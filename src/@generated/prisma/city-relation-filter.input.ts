import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cityWhereInput } from '../city/city-where.input';

@InputType()
export class CityRelationFilter {

    @Field(() => cityWhereInput, {nullable:true})
    is?: cityWhereInput;

    @Field(() => cityWhereInput, {nullable:true})
    isNot?: cityWhereInput;
}
