import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { outside_requestsCreateWithoutOutside_requests_updated_byTousersInput } from './outside-requests-create-without-outside-requests-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { outside_requestsCreateOrConnectWithoutOutside_requests_updated_byTousersInput } from './outside-requests-create-or-connect-without-outside-requests-updated-by-tousers.input';
import { outside_requestsUpsertWithWhereUniqueWithoutOutside_requests_updated_byTousersInput } from './outside-requests-upsert-with-where-unique-without-outside-requests-updated-by-tousers.input';
import { outside_requestsCreateManyOutside_requests_updated_byTousersInputEnvelope } from './outside-requests-create-many-outside-requests-updated-by-tousers-input-envelope.input';
import { outside_requestsWhereUniqueInput } from './outside-requests-where-unique.input';
import { outside_requestsUpdateWithWhereUniqueWithoutOutside_requests_updated_byTousersInput } from './outside-requests-update-with-where-unique-without-outside-requests-updated-by-tousers.input';
import { outside_requestsUpdateManyWithWhereWithoutOutside_requests_updated_byTousersInput } from './outside-requests-update-many-with-where-without-outside-requests-updated-by-tousers.input';
import { outside_requestsScalarWhereInput } from './outside-requests-scalar-where.input';

@InputType()
export class outside_requestsUpdateManyWithoutOutside_requests_updated_byTousersNestedInput {

    @Field(() => [outside_requestsCreateWithoutOutside_requests_updated_byTousersInput], {nullable:true})
    @Type(() => outside_requestsCreateWithoutOutside_requests_updated_byTousersInput)
    create?: Array<outside_requestsCreateWithoutOutside_requests_updated_byTousersInput>;

    @Field(() => [outside_requestsCreateOrConnectWithoutOutside_requests_updated_byTousersInput], {nullable:true})
    @Type(() => outside_requestsCreateOrConnectWithoutOutside_requests_updated_byTousersInput)
    connectOrCreate?: Array<outside_requestsCreateOrConnectWithoutOutside_requests_updated_byTousersInput>;

    @Field(() => [outside_requestsUpsertWithWhereUniqueWithoutOutside_requests_updated_byTousersInput], {nullable:true})
    @Type(() => outside_requestsUpsertWithWhereUniqueWithoutOutside_requests_updated_byTousersInput)
    upsert?: Array<outside_requestsUpsertWithWhereUniqueWithoutOutside_requests_updated_byTousersInput>;

    @Field(() => outside_requestsCreateManyOutside_requests_updated_byTousersInputEnvelope, {nullable:true})
    @Type(() => outside_requestsCreateManyOutside_requests_updated_byTousersInputEnvelope)
    createMany?: outside_requestsCreateManyOutside_requests_updated_byTousersInputEnvelope;

    @Field(() => [outside_requestsWhereUniqueInput], {nullable:true})
    @Type(() => outside_requestsWhereUniqueInput)
    set?: Array<outside_requestsWhereUniqueInput>;

    @Field(() => [outside_requestsWhereUniqueInput], {nullable:true})
    @Type(() => outside_requestsWhereUniqueInput)
    disconnect?: Array<outside_requestsWhereUniqueInput>;

    @Field(() => [outside_requestsWhereUniqueInput], {nullable:true})
    @Type(() => outside_requestsWhereUniqueInput)
    delete?: Array<outside_requestsWhereUniqueInput>;

    @Field(() => [outside_requestsWhereUniqueInput], {nullable:true})
    @Type(() => outside_requestsWhereUniqueInput)
    connect?: Array<outside_requestsWhereUniqueInput>;

    @Field(() => [outside_requestsUpdateWithWhereUniqueWithoutOutside_requests_updated_byTousersInput], {nullable:true})
    @Type(() => outside_requestsUpdateWithWhereUniqueWithoutOutside_requests_updated_byTousersInput)
    update?: Array<outside_requestsUpdateWithWhereUniqueWithoutOutside_requests_updated_byTousersInput>;

    @Field(() => [outside_requestsUpdateManyWithWhereWithoutOutside_requests_updated_byTousersInput], {nullable:true})
    @Type(() => outside_requestsUpdateManyWithWhereWithoutOutside_requests_updated_byTousersInput)
    updateMany?: Array<outside_requestsUpdateManyWithWhereWithoutOutside_requests_updated_byTousersInput>;

    @Field(() => [outside_requestsScalarWhereInput], {nullable:true})
    @Type(() => outside_requestsScalarWhereInput)
    deleteMany?: Array<outside_requestsScalarWhereInput>;
}
