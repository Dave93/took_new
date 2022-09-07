import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customers_commentsWhereUniqueInput } from './customers-comments-where-unique.input';
import { Type } from 'class-transformer';
import { customers_commentsUpdateWithoutCustomers_comments_created_byTousersInput } from './customers-comments-update-without-customers-comments-created-by-tousers.input';
import { customers_commentsCreateWithoutCustomers_comments_created_byTousersInput } from './customers-comments-create-without-customers-comments-created-by-tousers.input';

@InputType()
export class customers_commentsUpsertWithWhereUniqueWithoutCustomers_comments_created_byTousersInput {

    @Field(() => customers_commentsWhereUniqueInput, {nullable:false})
    @Type(() => customers_commentsWhereUniqueInput)
    where!: customers_commentsWhereUniqueInput;

    @Field(() => customers_commentsUpdateWithoutCustomers_comments_created_byTousersInput, {nullable:false})
    @Type(() => customers_commentsUpdateWithoutCustomers_comments_created_byTousersInput)
    update!: customers_commentsUpdateWithoutCustomers_comments_created_byTousersInput;

    @Field(() => customers_commentsCreateWithoutCustomers_comments_created_byTousersInput, {nullable:false})
    @Type(() => customers_commentsCreateWithoutCustomers_comments_created_byTousersInput)
    create!: customers_commentsCreateWithoutCustomers_comments_created_byTousersInput;
}
