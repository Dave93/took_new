import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Users_rolesMaxAggregate {

    @Field(() => String, {nullable:true})
    user_id?: string;

    @Field(() => Int, {nullable:true})
    role_id?: number;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;
}
