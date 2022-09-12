import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsCreateWithoutOrder_actions_terminalsInput } from './terminals-create-without-order-actions-terminals.input';
import { Type } from 'class-transformer';
import { terminalsCreateOrConnectWithoutOrder_actions_terminalsInput } from './terminals-create-or-connect-without-order-actions-terminals.input';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';

@InputType()
export class terminalsCreateNestedOneWithoutOrder_actions_terminalsInput {

    @Field(() => terminalsCreateWithoutOrder_actions_terminalsInput, {nullable:true})
    @Type(() => terminalsCreateWithoutOrder_actions_terminalsInput)
    create?: terminalsCreateWithoutOrder_actions_terminalsInput;

    @Field(() => terminalsCreateOrConnectWithoutOrder_actions_terminalsInput, {nullable:true})
    @Type(() => terminalsCreateOrConnectWithoutOrder_actions_terminalsInput)
    connectOrCreate?: terminalsCreateOrConnectWithoutOrder_actions_terminalsInput;

    @Field(() => terminalsWhereUniqueInput, {nullable:true})
    @Type(() => terminalsWhereUniqueInput)
    connect?: terminalsWhereUniqueInput;
}
