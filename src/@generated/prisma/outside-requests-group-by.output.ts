import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Outside_requestsCountAggregate } from './outside-requests-count-aggregate.output';
import { Outside_requestsMinAggregate } from './outside-requests-min-aggregate.output';
import { Outside_requestsMaxAggregate } from './outside-requests-max-aggregate.output';

@ObjectType()
export class Outside_requestsGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    request_type!: string;

    @Field(() => String, {nullable:false})
    request_data!: string;

    @Field(() => String, {nullable:true})
    response_data?: string;

    @Field(() => String, {nullable:true})
    response_status?: string;

    @Field(() => String, {nullable:false})
    external_url!: string;

    @Field(() => String, {nullable:false})
    model_name!: string;

    @Field(() => String, {nullable:false})
    model_id!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => String, {nullable:true})
    updated_by?: string;

    @Field(() => Outside_requestsCountAggregate, {nullable:true})
    _count?: Outside_requestsCountAggregate;

    @Field(() => Outside_requestsMinAggregate, {nullable:true})
    _min?: Outside_requestsMinAggregate;

    @Field(() => Outside_requestsMaxAggregate, {nullable:true})
    _max?: Outside_requestsMaxAggregate;
}
