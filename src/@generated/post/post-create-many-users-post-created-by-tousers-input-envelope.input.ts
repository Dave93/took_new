import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { postCreateManyUsers_post_created_byTousersInput } from './post-create-many-users-post-created-by-tousers.input';
import { Type } from 'class-transformer';

@InputType()
export class postCreateManyUsers_post_created_byTousersInputEnvelope {

    @Field(() => [postCreateManyUsers_post_created_byTousersInput], {nullable:false})
    @Type(() => postCreateManyUsers_post_created_byTousersInput)
    data!: Array<postCreateManyUsers_post_created_byTousersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
