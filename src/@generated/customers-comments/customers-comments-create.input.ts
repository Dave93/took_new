import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateNestedOneWithoutCustomers_comments_created_byTousersInput } from '../users/users-create-nested-one-without-customers-comments-created-by-tousers.input';
import { customersCreateNestedOneWithoutCustomers_comments_customersInput } from '../customers/customers-create-nested-one-without-customers-comments-customers.input';

@InputType()
export class customers_commentsCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    comment!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => usersCreateNestedOneWithoutCustomers_comments_created_byTousersInput, {nullable:true})
    customers_comments_created_byTousers?: usersCreateNestedOneWithoutCustomers_comments_created_byTousersInput;

    @Field(() => customersCreateNestedOneWithoutCustomers_comments_customersInput, {nullable:false})
    customers_comments_customers!: customersCreateNestedOneWithoutCustomers_comments_customersInput;
}
