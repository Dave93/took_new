import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { otpWhereUniqueInput } from './otp-where-unique.input';
import { Type } from 'class-transformer';
import { otpCreateWithoutUsersInput } from './otp-create-without-users.input';

@InputType()
export class otpCreateOrConnectWithoutUsersInput {

    @Field(() => otpWhereUniqueInput, {nullable:false})
    @Type(() => otpWhereUniqueInput)
    where!: otpWhereUniqueInput;

    @Field(() => otpCreateWithoutUsersInput, {nullable:false})
    @Type(() => otpCreateWithoutUsersInput)
    create!: otpCreateWithoutUsersInput;
}
