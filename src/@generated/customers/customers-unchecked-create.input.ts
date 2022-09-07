import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customers_commentsUncheckedCreateNestedManyWithoutCustomers_comments_customersInput } from '../customers-comments/customers-comments-unchecked-create-nested-many-without-customers-comments-customers.input';

@InputType()
export class customersUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => customers_commentsUncheckedCreateNestedManyWithoutCustomers_comments_customersInput, {nullable:true})
    customers_comments_customers?: customers_commentsUncheckedCreateNestedManyWithoutCustomers_comments_customersInput;
}
