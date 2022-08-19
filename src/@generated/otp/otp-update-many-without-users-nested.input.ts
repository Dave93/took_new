import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { otpCreateWithoutUsersInput } from './otp-create-without-users.input';
import { Type } from 'class-transformer';
import { otpCreateOrConnectWithoutUsersInput } from './otp-create-or-connect-without-users.input';
import { otpUpsertWithWhereUniqueWithoutUsersInput } from './otp-upsert-with-where-unique-without-users.input';
import { otpCreateManyUsersInputEnvelope } from './otp-create-many-users-input-envelope.input';
import { otpWhereUniqueInput } from './otp-where-unique.input';
import { otpUpdateWithWhereUniqueWithoutUsersInput } from './otp-update-with-where-unique-without-users.input';
import { otpUpdateManyWithWhereWithoutUsersInput } from './otp-update-many-with-where-without-users.input';
import { otpScalarWhereInput } from './otp-scalar-where.input';

@InputType()
export class otpUpdateManyWithoutUsersNestedInput {

    @Field(() => [otpCreateWithoutUsersInput], {nullable:true})
    @Type(() => otpCreateWithoutUsersInput)
    create?: Array<otpCreateWithoutUsersInput>;

    @Field(() => [otpCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => otpCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<otpCreateOrConnectWithoutUsersInput>;

    @Field(() => [otpUpsertWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => otpUpsertWithWhereUniqueWithoutUsersInput)
    upsert?: Array<otpUpsertWithWhereUniqueWithoutUsersInput>;

    @Field(() => otpCreateManyUsersInputEnvelope, {nullable:true})
    @Type(() => otpCreateManyUsersInputEnvelope)
    createMany?: otpCreateManyUsersInputEnvelope;

    @Field(() => [otpWhereUniqueInput], {nullable:true})
    @Type(() => otpWhereUniqueInput)
    set?: Array<otpWhereUniqueInput>;

    @Field(() => [otpWhereUniqueInput], {nullable:true})
    @Type(() => otpWhereUniqueInput)
    disconnect?: Array<otpWhereUniqueInput>;

    @Field(() => [otpWhereUniqueInput], {nullable:true})
    @Type(() => otpWhereUniqueInput)
    delete?: Array<otpWhereUniqueInput>;

    @Field(() => [otpWhereUniqueInput], {nullable:true})
    @Type(() => otpWhereUniqueInput)
    connect?: Array<otpWhereUniqueInput>;

    @Field(() => [otpUpdateWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => otpUpdateWithWhereUniqueWithoutUsersInput)
    update?: Array<otpUpdateWithWhereUniqueWithoutUsersInput>;

    @Field(() => [otpUpdateManyWithWhereWithoutUsersInput], {nullable:true})
    @Type(() => otpUpdateManyWithWhereWithoutUsersInput)
    updateMany?: Array<otpUpdateManyWithWhereWithoutUsersInput>;

    @Field(() => [otpScalarWhereInput], {nullable:true})
    @Type(() => otpScalarWhereInput)
    deleteMany?: Array<otpScalarWhereInput>;
}
