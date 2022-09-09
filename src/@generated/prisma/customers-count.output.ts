import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CustomersCount {

    @Field(() => Int, {nullable:false})
    customers_comments_customers!: number;

    @Field(() => Int, {nullable:false})
    orders_customers!: number;
}
