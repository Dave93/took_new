import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsUpdateWithoutOrder_locations_terminalsInput } from './terminals-update-without-order-locations-terminals.input';
import { Type } from 'class-transformer';
import { terminalsCreateWithoutOrder_locations_terminalsInput } from './terminals-create-without-order-locations-terminals.input';

@InputType()
export class terminalsUpsertWithoutOrder_locations_terminalsInput {

    @Field(() => terminalsUpdateWithoutOrder_locations_terminalsInput, {nullable:false})
    @Type(() => terminalsUpdateWithoutOrder_locations_terminalsInput)
    update!: terminalsUpdateWithoutOrder_locations_terminalsInput;

    @Field(() => terminalsCreateWithoutOrder_locations_terminalsInput, {nullable:false})
    @Type(() => terminalsCreateWithoutOrder_locations_terminalsInput)
    create!: terminalsCreateWithoutOrder_locations_terminalsInput;
}
