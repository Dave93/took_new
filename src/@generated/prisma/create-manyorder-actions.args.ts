import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_actionsCreateManyInput } from '../order-actions/order-actions-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyorderActionsArgs {

    @Field(() => [order_actionsCreateManyInput], {nullable:false})
    @Type(() => order_actionsCreateManyInput)
    data!: Array<order_actionsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
