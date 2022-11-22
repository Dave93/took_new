import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { outside_requestsWhereInput } from '../outside-requests/outside-requests-where.input';
import { Type } from 'class-transformer';
import { outside_requestsOrderByWithRelationInput } from '../outside-requests/outside-requests-order-by-with-relation.input';
import { outside_requestsWhereUniqueInput } from '../outside-requests/outside-requests-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Outside_requestsScalarFieldEnum } from './outside-requests-scalar-field.enum';

@ArgsType()
export class FindFirstoutsideRequestsArgs {

    @Field(() => outside_requestsWhereInput, {nullable:true})
    @Type(() => outside_requestsWhereInput)
    where?: outside_requestsWhereInput;

    @Field(() => [outside_requestsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<outside_requestsOrderByWithRelationInput>;

    @Field(() => outside_requestsWhereUniqueInput, {nullable:true})
    cursor?: outside_requestsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Outside_requestsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Outside_requestsScalarFieldEnum>;
}
