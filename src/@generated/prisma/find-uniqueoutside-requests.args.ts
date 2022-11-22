import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { outside_requestsWhereUniqueInput } from '../outside-requests/outside-requests-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueoutsideRequestsArgs {

    @Field(() => outside_requestsWhereUniqueInput, {nullable:false})
    @Type(() => outside_requestsWhereUniqueInput)
    where!: outside_requestsWhereUniqueInput;
}
