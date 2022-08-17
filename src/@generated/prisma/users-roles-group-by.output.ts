import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Users_rolesCountAggregate } from './users-roles-count-aggregate.output';
import { Users_rolesMinAggregate } from './users-roles-min-aggregate.output';
import { Users_rolesMaxAggregate } from './users-roles-max-aggregate.output';

@ObjectType()
export class Users_rolesGroupBy {

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => String, {nullable:false})
    role_id!: string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;

    @Field(() => Users_rolesCountAggregate, {nullable:true})
    _count?: Users_rolesCountAggregate;

    @Field(() => Users_rolesMinAggregate, {nullable:true})
    _min?: Users_rolesMinAggregate;

    @Field(() => Users_rolesMaxAggregate, {nullable:true})
    _max?: Users_rolesMaxAggregate;
}
