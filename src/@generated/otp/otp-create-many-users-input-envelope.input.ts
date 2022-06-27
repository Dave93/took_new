import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { otpCreateManyUsersInput } from './otp-create-many-users.input';
import { Type } from 'class-transformer';

@InputType()
export class otpCreateManyUsersInputEnvelope {

    @Field(() => [otpCreateManyUsersInput], {nullable:false})
    @Type(() => otpCreateManyUsersInput)
    data!: Array<otpCreateManyUsersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
