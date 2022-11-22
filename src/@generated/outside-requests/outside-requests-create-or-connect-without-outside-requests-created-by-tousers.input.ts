import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { outside_requestsWhereUniqueInput } from './outside-requests-where-unique.input';
import { Type } from 'class-transformer';
import { outside_requestsCreateWithoutOutside_requests_created_byTousersInput } from './outside-requests-create-without-outside-requests-created-by-tousers.input';

@InputType()
export class outside_requestsCreateOrConnectWithoutOutside_requests_created_byTousersInput {

    @Field(() => outside_requestsWhereUniqueInput, {nullable:false})
    @Type(() => outside_requestsWhereUniqueInput)
    where!: outside_requestsWhereUniqueInput;

    @Field(() => outside_requestsCreateWithoutOutside_requests_created_byTousersInput, {nullable:false})
    @Type(() => outside_requestsCreateWithoutOutside_requests_created_byTousersInput)
    create!: outside_requestsCreateWithoutOutside_requests_created_byTousersInput;
}
