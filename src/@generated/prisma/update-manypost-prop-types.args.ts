import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { post_prop_typesUpdateManyMutationInput } from '../post-prop-types/post-prop-types-update-many-mutation.input';
import { Type } from 'class-transformer';
import { post_prop_typesWhereInput } from '../post-prop-types/post-prop-types-where.input';

@ArgsType()
export class UpdateManypostPropTypesArgs {

    @Field(() => post_prop_typesUpdateManyMutationInput, {nullable:false})
    @Type(() => post_prop_typesUpdateManyMutationInput)
    data!: post_prop_typesUpdateManyMutationInput;

    @Field(() => post_prop_typesWhereInput, {nullable:true})
    @Type(() => post_prop_typesWhereInput)
    where?: post_prop_typesWhereInput;
}
