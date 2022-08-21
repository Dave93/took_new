import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutOtpInput } from './users-create-without-otp.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutOtpInput } from './users-create-or-connect-without-otp.input';
import { usersUpsertWithoutOtpInput } from './users-upsert-without-otp.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutOtpInput } from './users-update-without-otp.input';

@InputType()
export class usersUpdateOneRequiredWithoutOtpNestedInput {

    @Field(() => usersCreateWithoutOtpInput, {nullable:true})
    @Type(() => usersCreateWithoutOtpInput)
    create?: usersCreateWithoutOtpInput;

    @Field(() => usersCreateOrConnectWithoutOtpInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutOtpInput)
    connectOrCreate?: usersCreateOrConnectWithoutOtpInput;

    @Field(() => usersUpsertWithoutOtpInput, {nullable:true})
    @Type(() => usersUpsertWithoutOtpInput)
    upsert?: usersUpsertWithoutOtpInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutOtpInput, {nullable:true})
    @Type(() => usersUpdateWithoutOtpInput)
    update?: usersUpdateWithoutOtpInput;
}
