import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class order_actionsUncheckedUpdateManyWithoutOrder_actions_created_byTousersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    order_id?: string;

    @Field(() => Int, {nullable:true})
    duration?: number;

    @Field(() => String, {nullable:true})
    action?: string;

    @Field(() => String, {nullable:true})
    action_text?: string;

    @Field(() => String, {nullable:true})
    terminal_id?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;
}
