import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { customers_commentsCreateManyInput } from '../customers-comments/customers-comments-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManycustomersCommentsArgs {

    @Field(() => [customers_commentsCreateManyInput], {nullable:false})
    @Type(() => customers_commentsCreateManyInput)
    data!: Array<customers_commentsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
