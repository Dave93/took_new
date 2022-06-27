import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { post_prop_typesWhereInput } from '../post-prop-types/post-prop-types-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManypostPropTypesArgs {

    @Field(() => post_prop_typesWhereInput, {nullable:true})
    @Type(() => post_prop_typesWhereInput)
    where?: post_prop_typesWhereInput;
}
