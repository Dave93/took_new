import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { post_prop_typesScalarWhereInput } from './post-prop-types-scalar-where.input';
import { Type } from 'class-transformer';
import { post_prop_typesUpdateManyMutationInput } from './post-prop-types-update-many-mutation.input';

@InputType()
export class post_prop_typesUpdateManyWithWhereWithoutUsers_post_prop_types_updated_byTousersInput {

    @Field(() => post_prop_typesScalarWhereInput, {nullable:false})
    @Type(() => post_prop_typesScalarWhereInput)
    where!: post_prop_typesScalarWhereInput;

    @Field(() => post_prop_typesUpdateManyMutationInput, {nullable:false})
    @Type(() => post_prop_typesUpdateManyMutationInput)
    data!: post_prop_typesUpdateManyMutationInput;
}
