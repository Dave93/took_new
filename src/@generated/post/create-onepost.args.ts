import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { postCreateInput } from './post-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnepostArgs {

    @Field(() => postCreateInput, {nullable:false})
    @Type(() => postCreateInput)
    data!: postCreateInput;
}
