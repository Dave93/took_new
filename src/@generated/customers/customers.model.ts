import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { customers_comments } from '../customers-comments/customers-comments.model';
import { orders } from '../orders/orders.model';
import { CustomersCount } from '../prisma/customers-count.output';

@ObjectType()
export class customers {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => [customers_comments], {nullable:true})
    customers_comments_customers?: Array<customers_comments>;

    @Field(() => [orders], {nullable:true})
    orders_customers?: Array<orders>;

    @Field(() => CustomersCount, {nullable:false})
    _count?: CustomersCount;
}
