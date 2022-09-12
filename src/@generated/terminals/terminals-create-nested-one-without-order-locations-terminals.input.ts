import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsCreateWithoutOrder_locations_terminalsInput } from './terminals-create-without-order-locations-terminals.input';
import { Type } from 'class-transformer';
import { terminalsCreateOrConnectWithoutOrder_locations_terminalsInput } from './terminals-create-or-connect-without-order-locations-terminals.input';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';

@InputType()
export class terminalsCreateNestedOneWithoutOrder_locations_terminalsInput {

    @Field(() => terminalsCreateWithoutOrder_locations_terminalsInput, {nullable:true})
    @Type(() => terminalsCreateWithoutOrder_locations_terminalsInput)
    create?: terminalsCreateWithoutOrder_locations_terminalsInput;

    @Field(() => terminalsCreateOrConnectWithoutOrder_locations_terminalsInput, {nullable:true})
    @Type(() => terminalsCreateOrConnectWithoutOrder_locations_terminalsInput)
    connectOrCreate?: terminalsCreateOrConnectWithoutOrder_locations_terminalsInput;

    @Field(() => terminalsWhereUniqueInput, {nullable:true})
    @Type(() => terminalsWhereUniqueInput)
    connect?: terminalsWhereUniqueInput;
}
