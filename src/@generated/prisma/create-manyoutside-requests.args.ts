import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { outside_requestsCreateManyInput } from '../outside-requests/outside-requests-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyoutsideRequestsArgs {

    @Field(() => [outside_requestsCreateManyInput], {nullable:false})
    @Type(() => outside_requestsCreateManyInput)
    data!: Array<outside_requestsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
