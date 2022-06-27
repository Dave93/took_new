import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { postUpdateManyMutationInput } from './post-update-many-mutation.input';
import { Type } from 'class-transformer';
import { postWhereInput } from './post-where.input';

@ArgsType()
export class UpdateManypostArgs {

    @Field(() => postUpdateManyMutationInput, {nullable:false})
    @Type(() => postUpdateManyMutationInput)
    data!: postUpdateManyMutationInput;

    @Field(() => postWhereInput, {nullable:true})
    @Type(() => postWhereInput)
    where?: postWhereInput;
}
