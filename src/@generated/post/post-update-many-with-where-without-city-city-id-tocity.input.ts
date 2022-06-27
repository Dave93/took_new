import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { postScalarWhereInput } from './post-scalar-where.input';
import { Type } from 'class-transformer';
import { postUpdateManyMutationInput } from './post-update-many-mutation.input';

@InputType()
export class postUpdateManyWithWhereWithoutCity_city_idTocityInput {

    @Field(() => postScalarWhereInput, {nullable:false})
    @Type(() => postScalarWhereInput)
    where!: postScalarWhereInput;

    @Field(() => postUpdateManyMutationInput, {nullable:false})
    @Type(() => postUpdateManyMutationInput)
    data!: postUpdateManyMutationInput;
}
