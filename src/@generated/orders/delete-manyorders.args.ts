import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ordersWhereInput } from './orders-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyordersArgs {

    @Field(() => ordersWhereInput, {nullable:true})
    @Type(() => ordersWhereInput)
    where?: ordersWhereInput;
}
