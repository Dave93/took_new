import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { customers_commentsWhereUniqueInput } from '../customers-comments/customers-comments-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnecustomersCommentsArgs {

    @Field(() => customers_commentsWhereUniqueInput, {nullable:false})
    @Type(() => customers_commentsWhereUniqueInput)
    where!: customers_commentsWhereUniqueInput;
}
