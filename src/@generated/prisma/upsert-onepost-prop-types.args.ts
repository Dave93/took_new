import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { post_prop_typesWhereUniqueInput } from '../post-prop-types/post-prop-types-where-unique.input';
import { Type } from 'class-transformer';
import { post_prop_typesCreateInput } from '../post-prop-types/post-prop-types-create.input';
import { post_prop_typesUpdateInput } from '../post-prop-types/post-prop-types-update.input';

@ArgsType()
export class UpsertOnepostPropTypesArgs {

    @Field(() => post_prop_typesWhereUniqueInput, {nullable:false})
    @Type(() => post_prop_typesWhereUniqueInput)
    where!: post_prop_typesWhereUniqueInput;

    @Field(() => post_prop_typesCreateInput, {nullable:false})
    @Type(() => post_prop_typesCreateInput)
    create!: post_prop_typesCreateInput;

    @Field(() => post_prop_typesUpdateInput, {nullable:false})
    @Type(() => post_prop_typesUpdateInput)
    update!: post_prop_typesUpdateInput;
}
