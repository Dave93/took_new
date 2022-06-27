import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { postWhereInput } from './post-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManypostArgs {

    @Field(() => postWhereInput, {nullable:true})
    @Type(() => postWhereInput)
    where?: postWhereInput;
}
