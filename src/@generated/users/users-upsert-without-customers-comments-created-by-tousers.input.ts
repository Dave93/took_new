import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutCustomers_comments_created_byTousersInput } from './users-update-without-customers-comments-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutCustomers_comments_created_byTousersInput } from './users-create-without-customers-comments-created-by-tousers.input';

@InputType()
export class usersUpsertWithoutCustomers_comments_created_byTousersInput {

    @Field(() => usersUpdateWithoutCustomers_comments_created_byTousersInput, {nullable:false})
    @Type(() => usersUpdateWithoutCustomers_comments_created_byTousersInput)
    update!: usersUpdateWithoutCustomers_comments_created_byTousersInput;

    @Field(() => usersCreateWithoutCustomers_comments_created_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutCustomers_comments_created_byTousersInput)
    create!: usersCreateWithoutCustomers_comments_created_byTousersInput;
}
