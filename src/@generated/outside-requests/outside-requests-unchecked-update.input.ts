import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class outside_requestsUncheckedUpdateInput {

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

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:true})
    updated_by?: string;
}
