import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { outside_requestsWhereInput } from '../outside-requests/outside-requests-where.input';

@InputType()
export class Outside_requestsListRelationFilter {

    @Field(() => outside_requestsWhereInput, {nullable:true})
    every?: outside_requestsWhereInput;

    @Field(() => outside_requestsWhereInput, {nullable:true})
    some?: outside_requestsWhereInput;

    @Field(() => outside_requestsWhereInput, {nullable:true})
    none?: outside_requestsWhereInput;
}
