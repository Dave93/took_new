import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsUpdateWithoutOrder_actions_terminalsInput } from './terminals-update-without-order-actions-terminals.input';
import { Type } from 'class-transformer';
import { terminalsCreateWithoutOrder_actions_terminalsInput } from './terminals-create-without-order-actions-terminals.input';

@InputType()
export class terminalsUpsertWithoutOrder_actions_terminalsInput {

    @Field(() => terminalsUpdateWithoutOrder_actions_terminalsInput, {nullable:false})
    @Type(() => terminalsUpdateWithoutOrder_actions_terminalsInput)
    update!: terminalsUpdateWithoutOrder_actions_terminalsInput;

    @Field(() => terminalsCreateWithoutOrder_actions_terminalsInput, {nullable:false})
    @Type(() => terminalsCreateWithoutOrder_actions_terminalsInput)
    create!: terminalsCreateWithoutOrder_actions_terminalsInput;
}
