import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateNestedOneWithoutOtpInput } from '../users/users-create-nested-one-without-otp.input';

@InputType()
export class otpCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    otp!: string;

    @Field(() => Date, {nullable:false})
    expiry_date!: Date | string;

    @Field(() => Boolean, {nullable:true})
    verified?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersCreateNestedOneWithoutOtpInput, {nullable:false})
    users!: usersCreateNestedOneWithoutOtpInput;
}
