import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { otpScalarWhereInput } from './otp-scalar-where.input';
import { Type } from 'class-transformer';
import { otpUpdateManyMutationInput } from './otp-update-many-mutation.input';

@InputType()
export class otpUpdateManyWithWhereWithoutUsersInput {

    @Field(() => otpScalarWhereInput, {nullable:false})
    @Type(() => otpScalarWhereInput)
    where!: otpScalarWhereInput;

    @Field(() => otpUpdateManyMutationInput, {nullable:false})
    @Type(() => otpUpdateManyMutationInput)
    data!: otpUpdateManyMutationInput;
}
