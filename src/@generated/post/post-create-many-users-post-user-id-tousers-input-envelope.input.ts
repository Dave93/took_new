import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { postCreateManyUsers_post_user_idTousersInput } from './post-create-many-users-post-user-id-tousers.input';
import { Type } from 'class-transformer';

@InputType()
export class postCreateManyUsers_post_user_idTousersInputEnvelope {

    @Field(() => [postCreateManyUsers_post_user_idTousersInput], {nullable:false})
    @Type(() => postCreateManyUsers_post_user_idTousersInput)
    data!: Array<postCreateManyUsers_post_user_idTousersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
