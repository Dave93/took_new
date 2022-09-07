import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customersCreateNestedOneWithoutCustomers_comments_customersInput } from '../customers/customers-create-nested-one-without-customers-comments-customers.input';

@InputType()
export class customers_commentsCreateWithoutCustomers_comments_created_byTousersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    comment!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => customersCreateNestedOneWithoutCustomers_comments_customersInput, {nullable:false})
    customers_comments_customers!: customersCreateNestedOneWithoutCustomers_comments_customersInput;
}
