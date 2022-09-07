import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { customersWhereInput } from './customers-where.input';
import { Type } from 'class-transformer';
import { customersOrderByWithAggregationInput } from './customers-order-by-with-aggregation.input';
import { CustomersScalarFieldEnum } from '../prisma/customers-scalar-field.enum';
import { customersScalarWhereWithAggregatesInput } from './customers-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class customersGroupByArgs {

    @Field(() => customersWhereInput, {nullable:true})
    @Type(() => customersWhereInput)
    where?: customersWhereInput;

    @Field(() => [customersOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<customersOrderByWithAggregationInput>;

    @Field(() => [CustomersScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CustomersScalarFieldEnum>;

    @Field(() => customersScalarWhereWithAggregatesInput, {nullable:true})
    having?: customersScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
