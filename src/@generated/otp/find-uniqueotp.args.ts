import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { otpWhereUniqueInput } from './otp-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueotpArgs {

    @Field(() => otpWhereUniqueInput, {nullable:false})
    @Type(() => otpWhereUniqueInput)
    where!: otpWhereUniqueInput;
}
