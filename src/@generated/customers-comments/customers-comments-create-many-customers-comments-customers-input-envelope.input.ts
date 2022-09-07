import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customers_commentsCreateManyCustomers_comments_customersInput } from './customers-comments-create-many-customers-comments-customers.input';
import { Type } from 'class-transformer';

@InputType()
export class customers_commentsCreateManyCustomers_comments_customersInputEnvelope {

    @Field(() => [customers_commentsCreateManyCustomers_comments_customersInput], {nullable:false})
    @Type(() => customers_commentsCreateManyCustomers_comments_customersInput)
    data!: Array<customers_commentsCreateManyCustomers_comments_customersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
