import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateOneWithoutCustomers_comments_created_byTousersNestedInput } from '../users/users-update-one-without-customers-comments-created-by-tousers-nested.input';

@InputType()
export class customers_commentsUpdateWithoutCustomers_comments_customersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    comment?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => usersUpdateOneWithoutCustomers_comments_created_byTousersNestedInput, {nullable:true})
    customers_comments_created_byTousers?: usersUpdateOneWithoutCustomers_comments_created_byTousersNestedInput;
}
