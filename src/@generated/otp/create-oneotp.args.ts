import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { otpCreateInput } from './otp-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneotpArgs {

    @Field(() => otpCreateInput, {nullable:false})
    @Type(() => otpCreateInput)
    data!: otpCreateInput;
}
