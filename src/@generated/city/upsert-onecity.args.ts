import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { cityWhereUniqueInput } from './city-where-unique.input';
import { Type } from 'class-transformer';
import { cityCreateInput } from './city-create.input';
import { cityUpdateInput } from './city-update.input';

@ArgsType()
export class UpsertOnecityArgs {

    @Field(() => cityWhereUniqueInput, {nullable:false})
    @Type(() => cityWhereUniqueInput)
    where!: cityWhereUniqueInput;

    @Field(() => cityCreateInput, {nullable:false})
    @Type(() => cityCreateInput)
    create!: cityCreateInput;

    @Field(() => cityUpdateInput, {nullable:false})
    @Type(() => cityUpdateInput)
    update!: cityUpdateInput;
}
