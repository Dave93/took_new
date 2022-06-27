import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { postWhereInput } from '../post/post-where.input';

@InputType()
export class PostListRelationFilter {

    @Field(() => postWhereInput, {nullable:true})
    every?: postWhereInput;

    @Field(() => postWhereInput, {nullable:true})
    some?: postWhereInput;

    @Field(() => postWhereInput, {nullable:true})
    none?: postWhereInput;
}
