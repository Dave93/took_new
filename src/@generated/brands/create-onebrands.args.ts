import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { brandsCreateInput } from './brands-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnebrandsArgs {

    @Field(() => brandsCreateInput, {nullable:false})
    @Type(() => brandsCreateInput)
    data!: brandsCreateInput;
}
