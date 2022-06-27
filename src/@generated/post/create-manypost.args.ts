import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { postCreateManyInput } from './post-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManypostArgs {

    @Field(() => [postCreateManyInput], {nullable:false})
    @Type(() => postCreateManyInput)
    data!: Array<postCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
