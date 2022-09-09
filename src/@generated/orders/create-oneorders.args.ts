import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ordersCreateInput } from './orders-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneordersArgs {

    @Field(() => ordersCreateInput, {nullable:false})
    @Type(() => ordersCreateInput)
    data!: ordersCreateInput;
}
