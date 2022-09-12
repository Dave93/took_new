import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';
import { Type } from 'class-transformer';
import { terminalsCreateWithoutOrder_actions_terminalsInput } from './terminals-create-without-order-actions-terminals.input';

@InputType()
export class terminalsCreateOrConnectWithoutOrder_actions_terminalsInput {

    @Field(() => terminalsWhereUniqueInput, {nullable:false})
    @Type(() => terminalsWhereUniqueInput)
    where!: terminalsWhereUniqueInput;

    @Field(() => terminalsCreateWithoutOrder_actions_terminalsInput, {nullable:false})
    @Type(() => terminalsCreateWithoutOrder_actions_terminalsInput)
    create!: terminalsCreateWithoutOrder_actions_terminalsInput;
}
