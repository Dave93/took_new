import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { otpWhereUniqueInput } from './otp-where-unique.input';
import { Type } from 'class-transformer';
import { otpUpdateWithoutUsersInput } from './otp-update-without-users.input';

@InputType()
export class otpUpdateWithWhereUniqueWithoutUsersInput {

    @Field(() => otpWhereUniqueInput, {nullable:false})
    @Type(() => otpWhereUniqueInput)
    where!: otpWhereUniqueInput;

    @Field(() => otpUpdateWithoutUsersInput, {nullable:false})
    @Type(() => otpUpdateWithoutUsersInput)
    data!: otpUpdateWithoutUsersInput;
}
