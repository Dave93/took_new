import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CustomersCountAggregate } from './customers-count-aggregate.output';
import { CustomersMinAggregate } from './customers-min-aggregate.output';
import { CustomersMaxAggregate } from './customers-max-aggregate.output';

@ObjectType()
export class CustomersGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => CustomersCountAggregate, {nullable:true})
    _count?: CustomersCountAggregate;

    @Field(() => CustomersMinAggregate, {nullable:true})
    _min?: CustomersMinAggregate;

    @Field(() => CustomersMaxAggregate, {nullable:true})
    _max?: CustomersMaxAggregate;
}
