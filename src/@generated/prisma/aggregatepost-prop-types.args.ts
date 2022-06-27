import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { post_prop_typesWhereInput } from '../post-prop-types/post-prop-types-where.input';
import { Type } from 'class-transformer';
import { post_prop_typesOrderByWithRelationInput } from '../post-prop-types/post-prop-types-order-by-with-relation.input';
import { post_prop_typesWhereUniqueInput } from '../post-prop-types/post-prop-types-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatepostPropTypesArgs {

    @Field(() => post_prop_typesWhereInput, {nullable:true})
    @Type(() => post_prop_typesWhereInput)
    where?: post_prop_typesWhereInput;

    @Field(() => [post_prop_typesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<post_prop_typesOrderByWithRelationInput>;

    @Field(() => post_prop_typesWhereUniqueInput, {nullable:true})
    cursor?: post_prop_typesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
