import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { outside_requestsWhereUniqueInput } from '../outside-requests/outside-requests-where-unique.input';
import { Type } from 'class-transformer';
import { outside_requestsCreateInput } from '../outside-requests/outside-requests-create.input';
import { outside_requestsUpdateInput } from '../outside-requests/outside-requests-update.input';

@ArgsType()
export class UpsertOneoutsideRequestsArgs {

    @Field(() => outside_requestsWhereUniqueInput, {nullable:false})
    @Type(() => outside_requestsWhereUniqueInput)
    where!: outside_requestsWhereUniqueInput;

    @Field(() => outside_requestsCreateInput, {nullable:false})
    @Type(() => outside_requestsCreateInput)
    create!: outside_requestsCreateInput;

    @Field(() => outside_requestsUpdateInput, {nullable:false})
    @Type(() => outside_requestsUpdateInput)
    update!: outside_requestsUpdateInput;
}
