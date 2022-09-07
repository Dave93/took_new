import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { customers_commentsWhereInput } from '../customers-comments/customers-comments-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManycustomersCommentsArgs {

    @Field(() => customers_commentsWhereInput, {nullable:true})
    @Type(() => customers_commentsWhereInput)
    where?: customers_commentsWhereInput;
}
