import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { customers_commentsUpdateManyMutationInput } from '../customers-comments/customers-comments-update-many-mutation.input';
import { Type } from 'class-transformer';
import { customers_commentsWhereInput } from '../customers-comments/customers-comments-where.input';

@ArgsType()
export class UpdateManycustomersCommentsArgs {

    @Field(() => customers_commentsUpdateManyMutationInput, {nullable:false})
    @Type(() => customers_commentsUpdateManyMutationInput)
    data!: customers_commentsUpdateManyMutationInput;

    @Field(() => customers_commentsWhereInput, {nullable:true})
    @Type(() => customers_commentsWhereInput)
    where?: customers_commentsWhereInput;
}
