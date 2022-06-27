import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { otpCreateManyInput } from './otp-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyotpArgs {

    @Field(() => [otpCreateManyInput], {nullable:false})
    @Type(() => otpCreateManyInput)
    data!: Array<otpCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
