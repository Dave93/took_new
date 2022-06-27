import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { postUpdateInput } from './post-update.input';
import { Type } from 'class-transformer';
import { postWhereUniqueInput } from './post-where-unique.input';

@ArgsType()
export class UpdateOnepostArgs {

    @Field(() => postUpdateInput, {nullable:false})
    @Type(() => postUpdateInput)
    data!: postUpdateInput;

    @Field(() => postWhereUniqueInput, {nullable:false})
    @Type(() => postWhereUniqueInput)
    where!: postWhereUniqueInput;
}
