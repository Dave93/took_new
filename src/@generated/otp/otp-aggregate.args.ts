import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { otpWhereInput } from './otp-where.input';
import { Type } from 'class-transformer';
import { otpOrderByWithRelationInput } from './otp-order-by-with-relation.input';
import { otpWhereUniqueInput } from './otp-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class otpAggregateArgs {

    @Field(() => otpWhereInput, {nullable:true})
    @Type(() => otpWhereInput)
    where?: otpWhereInput;

    @Field(() => [otpOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<otpOrderByWithRelationInput>;

    @Field(() => otpWhereUniqueInput, {nullable:true})
    cursor?: otpWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
