import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class courier_terminal_balanceUncheckedCreateWithoutCourier_terminal_balance_created_byTousersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    courier_id!: string;

    @Field(() => String, {nullable:false})
    terminal_id!: string;

    @Field(() => String, {nullable:false})
    organization_id!: string;

    @Field(() => Float, {nullable:true})
    balance?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;
}
