import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { users } from '../users/users.model';

@ObjectType()
export class outside_requests {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    request_type!: string;

    @Field(() => String, {nullable:false})
    request_data!: string;

    @Field(() => String, {nullable:true})
    response_data!: string | null;

    @Field(() => String, {nullable:true})
    response_status!: string | null;

    @Field(() => String, {nullable:false})
    external_url!: string;

    @Field(() => String, {nullable:false})
    model_name!: string;

    @Field(() => String, {nullable:false})
    model_id!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => String, {nullable:true})
    created_by!: string | null;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => String, {nullable:true})
    updated_by!: string | null;

    @Field(() => users, {nullable:true})
    outside_requests_created_byTousers?: users | null;

    @Field(() => users, {nullable:true})
    outside_requests_updated_byTousers?: users | null;
}
