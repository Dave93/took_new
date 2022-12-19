import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { brandsWhereInput } from './brands-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManybrandsArgs {

    @Field(() => brandsWhereInput, {nullable:true})
    @Type(() => brandsWhereInput)
    where?: brandsWhereInput;
}
