import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { otpWhereInput } from '../otp/otp-where.input';

@InputType()
export class OtpListRelationFilter {

    @Field(() => otpWhereInput, {nullable:true})
    every?: otpWhereInput;

    @Field(() => otpWhereInput, {nullable:true})
    some?: otpWhereInput;

    @Field(() => otpWhereInput, {nullable:true})
    none?: otpWhereInput;
}
