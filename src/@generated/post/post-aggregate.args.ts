import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { postWhereInput } from './post-where.input';
import { Type } from 'class-transformer';
import { postOrderByWithRelationInput } from './post-order-by-with-relation.input';
import { postWhereUniqueInput } from './post-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class postAggregateArgs {

    @Field(() => postWhereInput, {nullable:true})
    @Type(() => postWhereInput)
    where?: postWhereInput;

    @Field(() => [postOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<postOrderByWithRelationInput>;

    @Field(() => postWhereUniqueInput, {nullable:true})
    cursor?: postWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
