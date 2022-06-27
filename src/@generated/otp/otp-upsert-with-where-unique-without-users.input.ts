import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { otpWhereUniqueInput } from './otp-where-unique.input';
import { Type } from 'class-transformer';
import { otpUpdateWithoutUsersInput } from './otp-update-without-users.input';
import { otpCreateWithoutUsersInput } from './otp-create-without-users.input';

@InputType()
export class otpUpsertWithWhereUniqueWithoutUsersInput {

    @Field(() => otpWhereUniqueInput, {nullable:false})
    @Type(() => otpWhereUniqueInput)
    where!: otpWhereUniqueInput;

    @Field(() => otpUpdateWithoutUsersInput, {nullable:false})
    @Type(() => otpUpdateWithoutUsersInput)
    update!: otpUpdateWithoutUsersInput;

    @Field(() => otpCreateWithoutUsersInput, {nullable:false})
    @Type(() => otpCreateWithoutUsersInput)
    create!: otpCreateWithoutUsersInput;
}
