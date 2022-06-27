import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { otpUpdateInput } from './otp-update.input';
import { Type } from 'class-transformer';
import { otpWhereUniqueInput } from './otp-where-unique.input';

@ArgsType()
export class UpdateOneotpArgs {

    @Field(() => otpUpdateInput, {nullable:false})
    @Type(() => otpUpdateInput)
    data!: otpUpdateInput;

    @Field(() => otpWhereUniqueInput, {nullable:false})
    @Type(() => otpWhereUniqueInput)
    where!: otpWhereUniqueInput;
}
