import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_locationsCreateManyOrder_locations_terminalsInput } from './order-locations-create-many-order-locations-terminals.input';
import { Type } from 'class-transformer';

@InputType()
export class order_locationsCreateManyOrder_locations_terminalsInputEnvelope {

    @Field(() => [order_locationsCreateManyOrder_locations_terminalsInput], {nullable:false})
    @Type(() => order_locationsCreateManyOrder_locations_terminalsInput)
    data!: Array<order_locationsCreateManyOrder_locations_terminalsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
