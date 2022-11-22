import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { outside_requestsCreateInput } from '../outside-requests/outside-requests-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneoutsideRequestsArgs {

    @Field(() => outside_requestsCreateInput, {nullable:false})
    @Type(() => outside_requestsCreateInput)
    data!: outside_requestsCreateInput;
}
