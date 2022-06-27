import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { cityWhereInput } from './city-where.input';
import { Type } from 'class-transformer';
import { cityOrderByWithRelationInput } from './city-order-by-with-relation.input';
import { cityWhereUniqueInput } from './city-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CityScalarFieldEnum } from '../prisma/city-scalar-field.enum';

@ArgsType()
export class FindFirstcityArgs {

    @Field(() => cityWhereInput, {nullable:true})
    @Type(() => cityWhereInput)
    where?: cityWhereInput;

    @Field(() => [cityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<cityOrderByWithRelationInput>;

    @Field(() => cityWhereUniqueInput, {nullable:true})
    cursor?: cityWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CityScalarFieldEnum>;
}
