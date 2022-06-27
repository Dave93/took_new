import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { otpCreateWithoutUsersInput } from './otp-create-without-users.input';
import { Type } from 'class-transformer';
import { otpCreateOrConnectWithoutUsersInput } from './otp-create-or-connect-without-users.input';
import { otpCreateManyUsersInputEnvelope } from './otp-create-many-users-input-envelope.input';
import { otpWhereUniqueInput } from './otp-where-unique.input';

@InputType()
export class otpCreateNestedManyWithoutUsersInput {

    @Field(() => [otpCreateWithoutUsersInput], {nullable:true})
    @Type(() => otpCreateWithoutUsersInput)
    create?: Array<otpCreateWithoutUsersInput>;

    @Field(() => [otpCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => otpCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<otpCreateOrConnectWithoutUsersInput>;

    @Field(() => otpCreateManyUsersInputEnvelope, {nullable:true})
    @Type(() => otpCreateManyUsersInputEnvelope)
    createMany?: otpCreateManyUsersInputEnvelope;

    @Field(() => [otpWhereUniqueInput], {nullable:true})
    @Type(() => otpWhereUniqueInput)
    connect?: Array<otpWhereUniqueInput>;
}
