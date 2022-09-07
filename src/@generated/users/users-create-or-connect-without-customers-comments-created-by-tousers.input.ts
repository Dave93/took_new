import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutCustomers_comments_created_byTousersInput } from './users-create-without-customers-comments-created-by-tousers.input';

@InputType()
export class usersCreateOrConnectWithoutCustomers_comments_created_byTousersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutCustomers_comments_created_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutCustomers_comments_created_byTousersInput)
    create!: usersCreateWithoutCustomers_comments_created_byTousersInput;
}
