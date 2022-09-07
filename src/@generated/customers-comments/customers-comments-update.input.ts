import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateOneWithoutCustomers_comments_created_byTousersNestedInput } from '../users/users-update-one-without-customers-comments-created-by-tousers-nested.input';
import { customersUpdateOneRequiredWithoutCustomers_comments_customersNestedInput } from '../customers/customers-update-one-required-without-customers-comments-customers-nested.input';

@InputType()
export class customers_commentsUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    comment?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => usersUpdateOneWithoutCustomers_comments_created_byTousersNestedInput, {nullable:true})
    customers_comments_created_byTousers?: usersUpdateOneWithoutCustomers_comments_created_byTousersNestedInput;

    @Field(() => customersUpdateOneRequiredWithoutCustomers_comments_customersNestedInput, {nullable:true})
    customers_comments_customers?: customersUpdateOneRequiredWithoutCustomers_comments_customersNestedInput;
}
