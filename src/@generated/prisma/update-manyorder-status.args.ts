import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_statusUpdateManyMutationInput } from '../order-status/order-status-update-many-mutation.input';
import { Type } from 'class-transformer';
import { order_statusWhereInput } from '../order-status/order-status-where.input';

@ArgsType()
export class UpdateManyorderStatusArgs {

    @Field(() => order_statusUpdateManyMutationInput, {nullable:false})
    @Type(() => order_statusUpdateManyMutationInput)
    data!: order_statusUpdateManyMutationInput;

    @Field(() => order_statusWhereInput, {nullable:true})
    @Type(() => order_statusWhereInput)
    where?: order_statusWhereInput;
}
