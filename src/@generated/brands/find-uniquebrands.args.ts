import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { brandsWhereUniqueInput } from './brands-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquebrandsArgs {

    @Field(() => brandsWhereUniqueInput, {nullable:false})
    @Type(() => brandsWhereUniqueInput)
    where!: brandsWhereUniqueInput;
}
