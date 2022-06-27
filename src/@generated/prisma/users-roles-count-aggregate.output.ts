import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Users_rolesCountAggregate {

    @Field(() => Int, {nullable:false})
    user_id!: number;

    @Field(() => Int, {nullable:false})
    role_id!: number;

    @Field(() => Int, {nullable:false})
    created_by!: number;

    @Field(() => Int, {nullable:false})
    updated_by!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
