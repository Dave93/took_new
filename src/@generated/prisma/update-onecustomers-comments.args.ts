import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { customers_commentsUpdateInput } from '../customers-comments/customers-comments-update.input';
import { Type } from 'class-transformer';
import { customers_commentsWhereUniqueInput } from '../customers-comments/customers-comments-where-unique.input';

@ArgsType()
export class UpdateOnecustomersCommentsArgs {

    @Field(() => customers_commentsUpdateInput, {nullable:false})
    @Type(() => customers_commentsUpdateInput)
    data!: customers_commentsUpdateInput;

    @Field(() => customers_commentsWhereUniqueInput, {nullable:false})
    @Type(() => customers_commentsWhereUniqueInput)
    where!: customers_commentsWhereUniqueInput;
}
