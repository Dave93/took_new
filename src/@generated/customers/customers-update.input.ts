import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customers_commentsUpdateManyWithoutCustomers_comments_customersNestedInput } from '../customers-comments/customers-comments-update-many-without-customers-comments-customers-nested.input';

@InputType()
export class customersUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => customers_commentsUpdateManyWithoutCustomers_comments_customersNestedInput, {nullable:true})
    customers_comments_customers?: customers_commentsUpdateManyWithoutCustomers_comments_customersNestedInput;
}
