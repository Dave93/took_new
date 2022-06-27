import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { users } from '../users/users.model';

@ObjectType()
export class otp {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => String, {nullable:false})
    otp!: string;

    @Field(() => Date, {nullable:false})
    expiry_date!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    verified!: boolean;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => users, {nullable:false})
    users?: users;
}
