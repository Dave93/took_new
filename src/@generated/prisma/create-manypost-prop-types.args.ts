import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { post_prop_typesCreateManyInput } from '../post-prop-types/post-prop-types-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManypostPropTypesArgs {

    @Field(() => [post_prop_typesCreateManyInput], {nullable:false})
    @Type(() => post_prop_typesCreateManyInput)
    data!: Array<post_prop_typesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
