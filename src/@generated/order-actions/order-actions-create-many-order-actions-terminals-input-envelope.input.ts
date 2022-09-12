import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_actionsCreateManyOrder_actions_terminalsInput } from './order-actions-create-many-order-actions-terminals.input';
import { Type } from 'class-transformer';

@InputType()
export class order_actionsCreateManyOrder_actions_terminalsInputEnvelope {

    @Field(() => [order_actionsCreateManyOrder_actions_terminalsInput], {nullable:false})
    @Type(() => order_actionsCreateManyOrder_actions_terminalsInput)
    data!: Array<order_actionsCreateManyOrder_actions_terminalsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
