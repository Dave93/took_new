import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { otpWhereInput } from './otp-where.input';
import { Type } from 'class-transformer';
import { otpOrderByWithAggregationInput } from './otp-order-by-with-aggregation.input';
import { OtpScalarFieldEnum } from '../prisma/otp-scalar-field.enum';
import { otpScalarWhereWithAggregatesInput } from './otp-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class otpGroupByArgs {

    @Field(() => otpWhereInput, {nullable:true})
    @Type(() => otpWhereInput)
    where?: otpWhereInput;

    @Field(() => [otpOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<otpOrderByWithAggregationInput>;

    @Field(() => [OtpScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof OtpScalarFieldEnum>;

    @Field(() => otpScalarWhereWithAggregatesInput, {nullable:true})
    having?: otpScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
