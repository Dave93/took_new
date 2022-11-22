import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { outside_requestsWhereInput } from '../outside-requests/outside-requests-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyoutsideRequestsArgs {

    @Field(() => outside_requestsWhereInput, {nullable:true})
    @Type(() => outside_requestsWhereInput)
    where?: outside_requestsWhereInput;
}
