import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_locationsWhereInput } from '../order-locations/order-locations-where.input';
import { Type } from 'class-transformer';
import { order_locationsOrderByWithRelationInput } from '../order-locations/order-locations-order-by-with-relation.input';
import { order_locationsWhereUniqueInput } from '../order-locations/order-locations-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Order_locationsScalarFieldEnum } from './order-locations-scalar-field.enum';

@ArgsType()
export class FindManyorderLocationsArgs {

    @Field(() => order_locationsWhereInput, {nullable:true})
    @Type(() => order_locationsWhereInput)
    where?: order_locationsWhereInput;

    @Field(() => [order_locationsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<order_locationsOrderByWithRelationInput>;

    @Field(() => order_locationsWhereUniqueInput, {nullable:true})
    cursor?: order_locationsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Order_locationsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Order_locationsScalarFieldEnum>;
}
