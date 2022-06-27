import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { cityCreateInput } from './city-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnecityArgs {

    @Field(() => cityCreateInput, {nullable:false})
    @Type(() => cityCreateInput)
    data!: cityCreateInput;
}
