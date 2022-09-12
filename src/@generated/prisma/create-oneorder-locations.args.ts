import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_locationsCreateInput } from '../order-locations/order-locations-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneorderLocationsArgs {

    @Field(() => order_locationsCreateInput, {nullable:false})
    @Type(() => order_locationsCreateInput)
    data!: order_locationsCreateInput;
}
