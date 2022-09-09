import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ordersUpdateManyMutationInput } from './orders-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ordersWhereInput } from './orders-where.input';

@ArgsType()
export class UpdateManyordersArgs {

    @Field(() => ordersUpdateManyMutationInput, {nullable:false})
    @Type(() => ordersUpdateManyMutationInput)
    data!: ordersUpdateManyMutationInput;

    @Field(() => ordersWhereInput, {nullable:true})
    @Type(() => ordersWhereInput)
    where?: ordersWhereInput;
}
