import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateNestedOneWithoutOutside_requests_updated_byTousersInput } from '../users/users-create-nested-one-without-outside-requests-updated-by-tousers.input';

@InputType()
export class outside_requestsCreateWithoutOutside_requests_created_byTousersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    request_type!: string;

    @Field(() => String, {nullable:false})
    request_data!: string;

    @Field(() => String, {nullable:true})
    response_data?: string;

    @Field(() => String, {nullable:true})
    response_status?: string;

    @Field(() => String, {nullable:false})
    external_url!: string;

    @Field(() => String, {nullable:false})
    model_name!: string;

    @Field(() => String, {nullable:false})
    model_id!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersCreateNestedOneWithoutOutside_requests_updated_byTousersInput, {nullable:true})
    outside_requests_updated_byTousers?: usersCreateNestedOneWithoutOutside_requests_updated_byTousersInput;
}
