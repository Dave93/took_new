import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { customers_commentsWhereUniqueInput } from '../customers-comments/customers-comments-where-unique.input';
import { Type } from 'class-transformer';
import { customers_commentsCreateInput } from '../customers-comments/customers-comments-create.input';
import { customers_commentsUpdateInput } from '../customers-comments/customers-comments-update.input';

@ArgsType()
export class UpsertOnecustomersCommentsArgs {

    @Field(() => customers_commentsWhereUniqueInput, {nullable:false})
    @Type(() => customers_commentsWhereUniqueInput)
    where!: customers_commentsWhereUniqueInput;

    @Field(() => customers_commentsCreateInput, {nullable:false})
    @Type(() => customers_commentsCreateInput)
    create!: customers_commentsCreateInput;

    @Field(() => customers_commentsUpdateInput, {nullable:false})
    @Type(() => customers_commentsUpdateInput)
    update!: customers_commentsUpdateInput;
}
