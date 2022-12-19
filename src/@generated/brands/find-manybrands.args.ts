import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { brandsWhereInput } from './brands-where.input';
import { Type } from 'class-transformer';
import { brandsOrderByWithRelationInput } from './brands-order-by-with-relation.input';
import { brandsWhereUniqueInput } from './brands-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BrandsScalarFieldEnum } from '../prisma/brands-scalar-field.enum';

@ArgsType()
export class FindManybrandsArgs {

    @Field(() => brandsWhereInput, {nullable:true})
    @Type(() => brandsWhereInput)
    where?: brandsWhereInput;

    @Field(() => [brandsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<brandsOrderByWithRelationInput>;

    @Field(() => brandsWhereUniqueInput, {nullable:true})
    cursor?: brandsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BrandsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BrandsScalarFieldEnum>;
}
