import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { user_status } from './user-status.enum';

@ObjectType()
export class UsersMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => String, {nullable:true})
    first_name?: string;

    @Field(() => String, {nullable:true})
    last_name?: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => Boolean, {nullable:true})
    is_super_user?: boolean;

    @Field(() => user_status, {nullable:true})
    status?: keyof typeof user_status;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
