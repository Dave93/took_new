import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { cityUpdateInput } from './city-update.input';
import { Type } from 'class-transformer';
import { cityWhereUniqueInput } from './city-where-unique.input';

@ArgsType()
export class UpdateOnecityArgs {

    @Field(() => cityUpdateInput, {nullable:false})
    @Type(() => cityUpdateInput)
    data!: cityUpdateInput;

    @Field(() => cityWhereUniqueInput, {nullable:false})
    @Type(() => cityWhereUniqueInput)
    where!: cityWhereUniqueInput;
}
