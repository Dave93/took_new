import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { brandsUpdateInput } from './brands-update.input';
import { Type } from 'class-transformer';
import { brandsWhereUniqueInput } from './brands-where-unique.input';

@ArgsType()
export class UpdateOnebrandsArgs {

    @Field(() => brandsUpdateInput, {nullable:false})
    @Type(() => brandsUpdateInput)
    data!: brandsUpdateInput;

    @Field(() => brandsWhereUniqueInput, {nullable:false})
    @Type(() => brandsWhereUniqueInput)
    where!: brandsWhereUniqueInput;
}
