import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class manager_withdrawCreateManyManager_withdraw_organizationsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    manager_id!: string;

    @Field(() => String, {nullable:false})
    courier_id!: string;

    @Field(() => String, {nullable:false})
    terminal_id!: string;

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => Float, {nullable:true})
    amount_before?: number;

    @Field(() => Float, {nullable:true})
    amount_after?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    payed_date?: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;
}
