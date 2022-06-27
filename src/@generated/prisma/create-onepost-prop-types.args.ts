import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { post_prop_typesCreateInput } from '../post-prop-types/post-prop-types-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnepostPropTypesArgs {

    @Field(() => post_prop_typesCreateInput, {nullable:false})
    @Type(() => post_prop_typesCreateInput)
    data!: post_prop_typesCreateInput;
}
