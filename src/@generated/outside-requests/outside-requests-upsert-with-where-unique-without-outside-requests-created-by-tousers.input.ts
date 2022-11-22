import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { outside_requestsWhereUniqueInput } from './outside-requests-where-unique.input';
import { Type } from 'class-transformer';
import { outside_requestsUpdateWithoutOutside_requests_created_byTousersInput } from './outside-requests-update-without-outside-requests-created-by-tousers.input';
import { outside_requestsCreateWithoutOutside_requests_created_byTousersInput } from './outside-requests-create-without-outside-requests-created-by-tousers.input';

@InputType()
export class outside_requestsUpsertWithWhereUniqueWithoutOutside_requests_created_byTousersInput {

    @Field(() => outside_requestsWhereUniqueInput, {nullable:false})
    @Type(() => outside_requestsWhereUniqueInput)
    where!: outside_requestsWhereUniqueInput;

    @Field(() => outside_requestsUpdateWithoutOutside_requests_created_byTousersInput, {nullable:false})
    @Type(() => outside_requestsUpdateWithoutOutside_requests_created_byTousersInput)
    update!: outside_requestsUpdateWithoutOutside_requests_created_byTousersInput;

    @Field(() => outside_requestsCreateWithoutOutside_requests_created_byTousersInput, {nullable:false})
    @Type(() => outside_requestsCreateWithoutOutside_requests_created_byTousersInput)
    create!: outside_requestsCreateWithoutOutside_requests_created_byTousersInput;
}
