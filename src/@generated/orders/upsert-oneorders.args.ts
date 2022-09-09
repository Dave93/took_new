import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { Type } from 'class-transformer';
import { ordersCreateInput } from './orders-create.input';
import { ordersUpdateInput } from './orders-update.input';

@ArgsType()
export class UpsertOneordersArgs {

    @Field(() => ordersWhereUniqueInput, {nullable:false})
    @Type(() => ordersWhereUniqueInput)
    where!: ordersWhereUniqueInput;

    @Field(() => ordersCreateInput, {nullable:false})
    @Type(() => ordersCreateInput)
    create!: ordersCreateInput;

    @Field(() => ordersUpdateInput, {nullable:false})
    @Type(() => ordersUpdateInput)
    update!: ordersUpdateInput;
}
