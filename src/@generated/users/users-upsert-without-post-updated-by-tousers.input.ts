import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutPost_updated_byTousersInput } from './users-update-without-post-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutPost_updated_byTousersInput } from './users-create-without-post-updated-by-tousers.input';

@InputType()
export class usersUpsertWithoutPost_updated_byTousersInput {

    @Field(() => usersUpdateWithoutPost_updated_byTousersInput, {nullable:false})
    @Type(() => usersUpdateWithoutPost_updated_byTousersInput)
    update!: usersUpdateWithoutPost_updated_byTousersInput;

    @Field(() => usersCreateWithoutPost_updated_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutPost_updated_byTousersInput)
    create!: usersCreateWithoutPost_updated_byTousersInput;
}
