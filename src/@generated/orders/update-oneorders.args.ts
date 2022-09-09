import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ordersUpdateInput } from './orders-update.input';
import { Type } from 'class-transformer';
import { ordersWhereUniqueInput } from './orders-where-unique.input';

@ArgsType()
export class UpdateOneordersArgs {

    @Field(() => ordersUpdateInput, {nullable:false})
    @Type(() => ordersUpdateInput)
    data!: ordersUpdateInput;

    @Field(() => ordersWhereUniqueInput, {nullable:false})
    @Type(() => ordersWhereUniqueInput)
    where!: ordersWhereUniqueInput;
}
