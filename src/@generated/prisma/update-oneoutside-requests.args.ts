import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { outside_requestsUpdateInput } from '../outside-requests/outside-requests-update.input';
import { Type } from 'class-transformer';
import { outside_requestsWhereUniqueInput } from '../outside-requests/outside-requests-where-unique.input';

@ArgsType()
export class UpdateOneoutsideRequestsArgs {

    @Field(() => outside_requestsUpdateInput, {nullable:false})
    @Type(() => outside_requestsUpdateInput)
    data!: outside_requestsUpdateInput;

    @Field(() => outside_requestsWhereUniqueInput, {nullable:false})
    @Type(() => outside_requestsWhereUniqueInput)
    where!: outside_requestsWhereUniqueInput;
}
