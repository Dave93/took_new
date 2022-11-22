import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateOneWithoutOutside_requests_updated_byTousersNestedInput } from '../users/users-update-one-without-outside-requests-updated-by-tousers-nested.input';

@InputType()
export class outside_requestsUpdateWithoutOutside_requests_created_byTousersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    request_type?: string;

    @Field(() => String, {nullable:true})
    request_data?: string;

    @Field(() => String, {nullable:true})
    response_data?: string;

    @Field(() => String, {nullable:true})
    response_status?: string;

    @Field(() => String, {nullable:true})
    external_url?: string;

    @Field(() => String, {nullable:true})
    model_name?: string;

    @Field(() => String, {nullable:true})
    model_id?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersUpdateOneWithoutOutside_requests_updated_byTousersNestedInput, {nullable:true})
    outside_requests_updated_byTousers?: usersUpdateOneWithoutOutside_requests_updated_byTousersNestedInput;
}
