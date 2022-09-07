import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Customers_commentsCountAggregate } from './customers-comments-count-aggregate.output';
import { Customers_commentsMinAggregate } from './customers-comments-min-aggregate.output';
import { Customers_commentsMaxAggregate } from './customers-comments-max-aggregate.output';

@ObjectType()
export class Customers_commentsGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    customer_id!: string;

    @Field(() => String, {nullable:false})
    comment!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => Customers_commentsCountAggregate, {nullable:true})
    _count?: Customers_commentsCountAggregate;

    @Field(() => Customers_commentsMinAggregate, {nullable:true})
    _min?: Customers_commentsMinAggregate;

    @Field(() => Customers_commentsMaxAggregate, {nullable:true})
    _max?: Customers_commentsMaxAggregate;
}
