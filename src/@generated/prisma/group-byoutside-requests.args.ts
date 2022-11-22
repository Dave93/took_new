import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { outside_requestsWhereInput } from '../outside-requests/outside-requests-where.input';
import { Type } from 'class-transformer';
import { outside_requestsOrderByWithAggregationInput } from '../outside-requests/outside-requests-order-by-with-aggregation.input';
import { Outside_requestsScalarFieldEnum } from './outside-requests-scalar-field.enum';
import { outside_requestsScalarWhereWithAggregatesInput } from '../outside-requests/outside-requests-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByoutsideRequestsArgs {

    @Field(() => outside_requestsWhereInput, {nullable:true})
    @Type(() => outside_requestsWhereInput)
    where?: outside_requestsWhereInput;

    @Field(() => [outside_requestsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<outside_requestsOrderByWithAggregationInput>;

    @Field(() => [Outside_requestsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Outside_requestsScalarFieldEnum>;

    @Field(() => outside_requestsScalarWhereWithAggregatesInput, {nullable:true})
    having?: outside_requestsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
