import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_actionsCreateInput } from '../order-actions/order-actions-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneorderActionsArgs {

    @Field(() => order_actionsCreateInput, {nullable:false})
    @Type(() => order_actionsCreateInput)
    data!: order_actionsCreateInput;
}
