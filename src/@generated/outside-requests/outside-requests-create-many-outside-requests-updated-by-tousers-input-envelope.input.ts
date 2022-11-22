import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { outside_requestsCreateManyOutside_requests_updated_byTousersInput } from './outside-requests-create-many-outside-requests-updated-by-tousers.input';
import { Type } from 'class-transformer';

@InputType()
export class outside_requestsCreateManyOutside_requests_updated_byTousersInputEnvelope {

    @Field(() => [outside_requestsCreateManyOutside_requests_updated_byTousersInput], {nullable:false})
    @Type(() => outside_requestsCreateManyOutside_requests_updated_byTousersInput)
    data!: Array<outside_requestsCreateManyOutside_requests_updated_byTousersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
