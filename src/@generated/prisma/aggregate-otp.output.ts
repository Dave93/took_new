import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { OtpCountAggregate } from './otp-count-aggregate.output';
import { OtpMinAggregate } from './otp-min-aggregate.output';
import { OtpMaxAggregate } from './otp-max-aggregate.output';

@ObjectType()
export class AggregateOtp {

    @Field(() => OtpCountAggregate, {nullable:true})
    _count?: OtpCountAggregate;

    @Field(() => OtpMinAggregate, {nullable:true})
    _min?: OtpMinAggregate;

    @Field(() => OtpMaxAggregate, {nullable:true})
    _max?: OtpMaxAggregate;
}
