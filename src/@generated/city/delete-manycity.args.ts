import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { cityWhereInput } from './city-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManycityArgs {

    @Field(() => cityWhereInput, {nullable:true})
    @Type(() => cityWhereInput)
    where?: cityWhereInput;
}
