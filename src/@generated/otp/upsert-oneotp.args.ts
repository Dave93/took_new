import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { otpWhereUniqueInput } from './otp-where-unique.input';
import { Type } from 'class-transformer';
import { otpCreateInput } from './otp-create.input';
import { otpUpdateInput } from './otp-update.input';

@ArgsType()
export class UpsertOneotpArgs {

    @Field(() => otpWhereUniqueInput, {nullable:false})
    @Type(() => otpWhereUniqueInput)
    where!: otpWhereUniqueInput;

    @Field(() => otpCreateInput, {nullable:false})
    @Type(() => otpCreateInput)
    create!: otpCreateInput;

    @Field(() => otpUpdateInput, {nullable:false})
    @Type(() => otpUpdateInput)
    update!: otpUpdateInput;
}
