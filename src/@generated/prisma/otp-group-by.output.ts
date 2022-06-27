import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { OtpCountAggregate } from './otp-count-aggregate.output';
import { OtpMinAggregate } from './otp-min-aggregate.output';
import { OtpMaxAggregate } from './otp-max-aggregate.output';

@ObjectType()
export class OtpGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => String, {nullable:false})
    otp!: string;

    @Field(() => Date, {nullable:false})
    expiry_date!: Date | string;

    @Field(() => Boolean, {nullable:false})
    verified!: boolean;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => OtpCountAggregate, {nullable:true})
    _count?: OtpCountAggregate;

    @Field(() => OtpMinAggregate, {nullable:true})
    _min?: OtpMinAggregate;

    @Field(() => OtpMaxAggregate, {nullable:true})
    _max?: OtpMaxAggregate;
}
