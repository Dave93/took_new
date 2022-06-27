import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { postWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { postCreateInput } from './post-create.input';
import { postUpdateInput } from './post-update.input';

@ArgsType()
export class UpsertOnepostArgs {

    @Field(() => postWhereUniqueInput, {nullable:false})
    @Type(() => postWhereUniqueInput)
    where!: postWhereUniqueInput;

    @Field(() => postCreateInput, {nullable:false})
    @Type(() => postCreateInput)
    create!: postCreateInput;

    @Field(() => postUpdateInput, {nullable:false})
    @Type(() => postUpdateInput)
    update!: postUpdateInput;
}
