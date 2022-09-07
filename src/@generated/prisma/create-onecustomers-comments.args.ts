import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { customers_commentsCreateInput } from '../customers-comments/customers-comments-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnecustomersCommentsArgs {

    @Field(() => customers_commentsCreateInput, {nullable:false})
    @Type(() => customers_commentsCreateInput)
    data!: customers_commentsCreateInput;
}
