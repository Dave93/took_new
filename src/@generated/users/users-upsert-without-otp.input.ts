import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutOtpInput } from './users-update-without-otp.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutOtpInput } from './users-create-without-otp.input';

@InputType()
export class usersUpsertWithoutOtpInput {

    @Field(() => usersUpdateWithoutOtpInput, {nullable:false})
    @Type(() => usersUpdateWithoutOtpInput)
    update!: usersUpdateWithoutOtpInput;

    @Field(() => usersCreateWithoutOtpInput, {nullable:false})
    @Type(() => usersCreateWithoutOtpInput)
    create!: usersCreateWithoutOtpInput;
}
