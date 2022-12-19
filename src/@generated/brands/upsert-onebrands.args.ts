import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { brandsWhereUniqueInput } from './brands-where-unique.input';
import { Type } from 'class-transformer';
import { brandsCreateInput } from './brands-create.input';
import { brandsUpdateInput } from './brands-update.input';

@ArgsType()
export class UpsertOnebrandsArgs {

    @Field(() => brandsWhereUniqueInput, {nullable:false})
    @Type(() => brandsWhereUniqueInput)
    where!: brandsWhereUniqueInput;

    @Field(() => brandsCreateInput, {nullable:false})
    @Type(() => brandsCreateInput)
    create!: brandsCreateInput;

    @Field(() => brandsUpdateInput, {nullable:false})
    @Type(() => brandsUpdateInput)
    update!: brandsUpdateInput;
}
