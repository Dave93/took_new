import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutOtpInput } from './users-create-without-otp.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutOtpInput } from './users-create-or-connect-without-otp.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutOtpInput {

    @Field(() => usersCreateWithoutOtpInput, {nullable:true})
    @Type(() => usersCreateWithoutOtpInput)
    create?: usersCreateWithoutOtpInput;

    @Field(() => usersCreateOrConnectWithoutOtpInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutOtpInput)
    connectOrCreate?: usersCreateOrConnectWithoutOtpInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}
