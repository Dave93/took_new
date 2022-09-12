import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';
import { Type } from 'class-transformer';
import { terminalsCreateWithoutOrder_locations_terminalsInput } from './terminals-create-without-order-locations-terminals.input';

@InputType()
export class terminalsCreateOrConnectWithoutOrder_locations_terminalsInput {

    @Field(() => terminalsWhereUniqueInput, {nullable:false})
    @Type(() => terminalsWhereUniqueInput)
    where!: terminalsWhereUniqueInput;

    @Field(() => terminalsCreateWithoutOrder_locations_terminalsInput, {nullable:false})
    @Type(() => terminalsCreateWithoutOrder_locations_terminalsInput)
    create!: terminalsCreateWithoutOrder_locations_terminalsInput;
}
