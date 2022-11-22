import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { outside_requestsCreateWithoutOutside_requests_created_byTousersInput } from './outside-requests-create-without-outside-requests-created-by-tousers.input';
import { Type } from 'class-transformer';
import { outside_requestsCreateOrConnectWithoutOutside_requests_created_byTousersInput } from './outside-requests-create-or-connect-without-outside-requests-created-by-tousers.input';
import { outside_requestsCreateManyOutside_requests_created_byTousersInputEnvelope } from './outside-requests-create-many-outside-requests-created-by-tousers-input-envelope.input';
import { outside_requestsWhereUniqueInput } from './outside-requests-where-unique.input';

@InputType()
export class outside_requestsCreateNestedManyWithoutOutside_requests_created_byTousersInput {

    @Field(() => [outside_requestsCreateWithoutOutside_requests_created_byTousersInput], {nullable:true})
    @Type(() => outside_requestsCreateWithoutOutside_requests_created_byTousersInput)
    create?: Array<outside_requestsCreateWithoutOutside_requests_created_byTousersInput>;

    @Field(() => [outside_requestsCreateOrConnectWithoutOutside_requests_created_byTousersInput], {nullable:true})
    @Type(() => outside_requestsCreateOrConnectWithoutOutside_requests_created_byTousersInput)
    connectOrCreate?: Array<outside_requestsCreateOrConnectWithoutOutside_requests_created_byTousersInput>;

    @Field(() => outside_requestsCreateManyOutside_requests_created_byTousersInputEnvelope, {nullable:true})
    @Type(() => outside_requestsCreateManyOutside_requests_created_byTousersInputEnvelope)
    createMany?: outside_requestsCreateManyOutside_requests_created_byTousersInputEnvelope;

    @Field(() => [outside_requestsWhereUniqueInput], {nullable:true})
    @Type(() => outside_requestsWhereUniqueInput)
    connect?: Array<outside_requestsWhereUniqueInput>;
}
