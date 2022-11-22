import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { outside_requestsCreateManyOutside_requests_created_byTousersInput } from './outside-requests-create-many-outside-requests-created-by-tousers.input';
import { Type } from 'class-transformer';

@InputType()
export class outside_requestsCreateManyOutside_requests_created_byTousersInputEnvelope {

    @Field(() => [outside_requestsCreateManyOutside_requests_created_byTousersInput], {nullable:false})
    @Type(() => outside_requestsCreateManyOutside_requests_created_byTousersInput)
    data!: Array<outside_requestsCreateManyOutside_requests_created_byTousersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
