import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsCreateWithoutOrder_locations_terminalsInput } from './terminals-create-without-order-locations-terminals.input';
import { Type } from 'class-transformer';
import { terminalsCreateOrConnectWithoutOrder_locations_terminalsInput } from './terminals-create-or-connect-without-order-locations-terminals.input';
import { terminalsUpsertWithoutOrder_locations_terminalsInput } from './terminals-upsert-without-order-locations-terminals.input';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';
import { terminalsUpdateWithoutOrder_locations_terminalsInput } from './terminals-update-without-order-locations-terminals.input';

@InputType()
export class terminalsUpdateOneRequiredWithoutOrder_locations_terminalsNestedInput {

    @Field(() => terminalsCreateWithoutOrder_locations_terminalsInput, {nullable:true})
    @Type(() => terminalsCreateWithoutOrder_locations_terminalsInput)
    create?: terminalsCreateWithoutOrder_locations_terminalsInput;

    @Field(() => terminalsCreateOrConnectWithoutOrder_locations_terminalsInput, {nullable:true})
    @Type(() => terminalsCreateOrConnectWithoutOrder_locations_terminalsInput)
    connectOrCreate?: terminalsCreateOrConnectWithoutOrder_locations_terminalsInput;

    @Field(() => terminalsUpsertWithoutOrder_locations_terminalsInput, {nullable:true})
    @Type(() => terminalsUpsertWithoutOrder_locations_terminalsInput)
    upsert?: terminalsUpsertWithoutOrder_locations_terminalsInput;

    @Field(() => terminalsWhereUniqueInput, {nullable:true})
    @Type(() => terminalsWhereUniqueInput)
    connect?: terminalsWhereUniqueInput;

    @Field(() => terminalsUpdateWithoutOrder_locations_terminalsInput, {nullable:true})
    @Type(() => terminalsUpdateWithoutOrder_locations_terminalsInput)
    update?: terminalsUpdateWithoutOrder_locations_terminalsInput;
}
