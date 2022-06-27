import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutOtpInput } from './users-create-without-otp.input';

@InputType()
export class usersCreateOrConnectWithoutOtpInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutOtpInput, {nullable:false})
    @Type(() => usersCreateWithoutOtpInput)
    create!: usersCreateWithoutOtpInput;
}
