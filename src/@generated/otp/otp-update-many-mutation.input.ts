import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class otpUpdateManyMutationInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    otp?: string;

    @Field(() => Date, {nullable:true})
    expiry_date?: Date | string;

    @Field(() => Boolean, {nullable:true})
    verified?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
