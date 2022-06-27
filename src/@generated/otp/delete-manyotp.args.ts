import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { otpWhereInput } from './otp-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyotpArgs {

    @Field(() => otpWhereInput, {nullable:true})
    @Type(() => otpWhereInput)
    where?: otpWhereInput;
}
