import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { otpUpdateManyMutationInput } from './otp-update-many-mutation.input';
import { Type } from 'class-transformer';
import { otpWhereInput } from './otp-where.input';

@ArgsType()
export class UpdateManyotpArgs {

    @Field(() => otpUpdateManyMutationInput, {nullable:false})
    @Type(() => otpUpdateManyMutationInput)
    data!: otpUpdateManyMutationInput;

    @Field(() => otpWhereInput, {nullable:true})
    @Type(() => otpWhereInput)
    where?: otpWhereInput;
}
