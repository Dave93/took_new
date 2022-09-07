import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { users } from '../users/users.model';
import { customers } from '../customers/customers.model';

@ObjectType()
export class customers_comments {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    customer_id!: string;

    @Field(() => String, {nullable:false})
    comment!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => String, {nullable:true})
    created_by!: string | null;

    @Field(() => users, {nullable:true})
    customers_comments_created_byTousers?: users | null;

    @Field(() => customers, {nullable:false})
    customers_comments_customers?: customers;
}
