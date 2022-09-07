import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customers_commentsCreateManyCustomers_comments_created_byTousersInput } from './customers-comments-create-many-customers-comments-created-by-tousers.input';
import { Type } from 'class-transformer';

@InputType()
export class customers_commentsCreateManyCustomers_comments_created_byTousersInputEnvelope {

    @Field(() => [customers_commentsCreateManyCustomers_comments_created_byTousersInput], {nullable:false})
    @Type(() => customers_commentsCreateManyCustomers_comments_created_byTousersInput)
    data!: Array<customers_commentsCreateManyCustomers_comments_created_byTousersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
