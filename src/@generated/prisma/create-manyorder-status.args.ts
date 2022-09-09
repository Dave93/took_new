import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_statusCreateManyInput } from '../order-status/order-status-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyorderStatusArgs {

    @Field(() => [order_statusCreateManyInput], {nullable:false})
    @Type(() => order_statusCreateManyInput)
    data!: Array<order_statusCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
