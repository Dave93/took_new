import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_locationsCreateManyOrder_locations_created_byTousersInput } from './order-locations-create-many-order-locations-created-by-tousers.input';
import { Type } from 'class-transformer';

@InputType()
export class order_locationsCreateManyOrder_locations_created_byTousersInputEnvelope {

    @Field(() => [order_locationsCreateManyOrder_locations_created_byTousersInput], {nullable:false})
    @Type(() => order_locationsCreateManyOrder_locations_created_byTousersInput)
    data!: Array<order_locationsCreateManyOrder_locations_created_byTousersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
