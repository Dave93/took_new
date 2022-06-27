import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { user_status } from './user-status.enum';
import { UsersCountAggregate } from './users-count-aggregate.output';
import { UsersMinAggregate } from './users-min-aggregate.output';
import { UsersMaxAggregate } from './users-max-aggregate.output';

@ObjectType()
export class UsersGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => String, {nullable:true})
    first_name?: string;

    @Field(() => String, {nullable:true})
    last_name?: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => Boolean, {nullable:false})
    is_super_user!: boolean;

    @Field(() => user_status, {nullable:false})
    status!: keyof typeof user_status;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => UsersCountAggregate, {nullable:true})
    _count?: UsersCountAggregate;

    @Field(() => UsersMinAggregate, {nullable:true})
    _min?: UsersMinAggregate;

    @Field(() => UsersMaxAggregate, {nullable:true})
    _max?: UsersMaxAggregate;
}
