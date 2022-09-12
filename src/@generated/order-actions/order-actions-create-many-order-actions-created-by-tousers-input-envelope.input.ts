import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_actionsCreateManyOrder_actions_created_byTousersInput } from './order-actions-create-many-order-actions-created-by-tousers.input';
import { Type } from 'class-transformer';

@InputType()
export class order_actionsCreateManyOrder_actions_created_byTousersInputEnvelope {

    @Field(() => [order_actionsCreateManyOrder_actions_created_byTousersInput], {nullable:false})
    @Type(() => order_actionsCreateManyOrder_actions_created_byTousersInput)
    data!: Array<order_actionsCreateManyOrder_actions_created_byTousersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
