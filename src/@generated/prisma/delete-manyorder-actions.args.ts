import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_actionsWhereInput } from '../order-actions/order-actions-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyorderActionsArgs {

    @Field(() => order_actionsWhereInput, {nullable:true})
    @Type(() => order_actionsWhereInput)
    where?: order_actionsWhereInput;
}
