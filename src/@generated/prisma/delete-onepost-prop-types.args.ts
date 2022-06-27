import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { post_prop_typesWhereUniqueInput } from '../post-prop-types/post-prop-types-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnepostPropTypesArgs {

    @Field(() => post_prop_typesWhereUniqueInput, {nullable:false})
    @Type(() => post_prop_typesWhereUniqueInput)
    where!: post_prop_typesWhereUniqueInput;
}
