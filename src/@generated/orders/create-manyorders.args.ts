import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ordersCreateManyInput } from './orders-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyordersArgs {

    @Field(() => [ordersCreateManyInput], {nullable:false})
    @Type(() => ordersCreateManyInput)
    data!: Array<ordersCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
