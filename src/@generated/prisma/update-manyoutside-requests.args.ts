import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { outside_requestsUpdateManyMutationInput } from '../outside-requests/outside-requests-update-many-mutation.input';
import { Type } from 'class-transformer';
import { outside_requestsWhereInput } from '../outside-requests/outside-requests-where.input';

@ArgsType()
export class UpdateManyoutsideRequestsArgs {

    @Field(() => outside_requestsUpdateManyMutationInput, {nullable:false})
    @Type(() => outside_requestsUpdateManyMutationInput)
    data!: outside_requestsUpdateManyMutationInput;

    @Field(() => outside_requestsWhereInput, {nullable:true})
    @Type(() => outside_requestsWhereInput)
    where?: outside_requestsWhereInput;
}
