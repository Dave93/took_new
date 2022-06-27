import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { postWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnepostArgs {

    @Field(() => postWhereUniqueInput, {nullable:false})
    @Type(() => postWhereUniqueInput)
    where!: postWhereUniqueInput;
}
