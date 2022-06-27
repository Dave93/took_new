import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { post_prop_typesUpdateInput } from '../post-prop-types/post-prop-types-update.input';
import { Type } from 'class-transformer';
import { post_prop_typesWhereUniqueInput } from '../post-prop-types/post-prop-types-where-unique.input';

@ArgsType()
export class UpdateOnepostPropTypesArgs {

    @Field(() => post_prop_typesUpdateInput, {nullable:false})
    @Type(() => post_prop_typesUpdateInput)
    data!: post_prop_typesUpdateInput;

    @Field(() => post_prop_typesWhereUniqueInput, {nullable:false})
    @Type(() => post_prop_typesWhereUniqueInput)
    where!: post_prop_typesWhereUniqueInput;
}
