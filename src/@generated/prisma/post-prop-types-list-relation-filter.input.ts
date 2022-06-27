import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { post_prop_typesWhereInput } from '../post-prop-types/post-prop-types-where.input';

@InputType()
export class Post_prop_typesListRelationFilter {

    @Field(() => post_prop_typesWhereInput, {nullable:true})
    every?: post_prop_typesWhereInput;

    @Field(() => post_prop_typesWhereInput, {nullable:true})
    some?: post_prop_typesWhereInput;

    @Field(() => post_prop_typesWhereInput, {nullable:true})
    none?: post_prop_typesWhereInput;
}
