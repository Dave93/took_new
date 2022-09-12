import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_actionsWhereUniqueInput } from '../order-actions/order-actions-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneorderActionsArgs {

    @Field(() => order_actionsWhereUniqueInput, {nullable:false})
    @Type(() => order_actionsWhereUniqueInput)
    where!: order_actionsWhereUniqueInput;
}
