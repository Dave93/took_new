import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customersUpdateOneRequiredWithoutCustomers_comments_customersNestedInput } from '../customers/customers-update-one-required-without-customers-comments-customers-nested.input';

@InputType()
export class customers_commentsUpdateWithoutCustomers_comments_created_byTousersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    comment?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => customersUpdateOneRequiredWithoutCustomers_comments_customersNestedInput, {nullable:true})
    customers_comments_customers?: customersUpdateOneRequiredWithoutCustomers_comments_customersNestedInput;
}
