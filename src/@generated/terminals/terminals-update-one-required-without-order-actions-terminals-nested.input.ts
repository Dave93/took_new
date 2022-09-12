import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsCreateWithoutOrder_actions_terminalsInput } from './terminals-create-without-order-actions-terminals.input';
import { Type } from 'class-transformer';
import { terminalsCreateOrConnectWithoutOrder_actions_terminalsInput } from './terminals-create-or-connect-without-order-actions-terminals.input';
import { terminalsUpsertWithoutOrder_actions_terminalsInput } from './terminals-upsert-without-order-actions-terminals.input';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';
import { terminalsUpdateWithoutOrder_actions_terminalsInput } from './terminals-update-without-order-actions-terminals.input';

@InputType()
export class terminalsUpdateOneRequiredWithoutOrder_actions_terminalsNestedInput {

    @Field(() => terminalsCreateWithoutOrder_actions_terminalsInput, {nullable:true})
    @Type(() => terminalsCreateWithoutOrder_actions_terminalsInput)
    create?: terminalsCreateWithoutOrder_actions_terminalsInput;

    @Field(() => terminalsCreateOrConnectWithoutOrder_actions_terminalsInput, {nullable:true})
    @Type(() => terminalsCreateOrConnectWithoutOrder_actions_terminalsInput)
    connectOrCreate?: terminalsCreateOrConnectWithoutOrder_actions_terminalsInput;

    @Field(() => terminalsUpsertWithoutOrder_actions_terminalsInput, {nullable:true})
    @Type(() => terminalsUpsertWithoutOrder_actions_terminalsInput)
    upsert?: terminalsUpsertWithoutOrder_actions_terminalsInput;

    @Field(() => terminalsWhereUniqueInput, {nullable:true})
    @Type(() => terminalsWhereUniqueInput)
    connect?: terminalsWhereUniqueInput;

    @Field(() => terminalsUpdateWithoutOrder_actions_terminalsInput, {nullable:true})
    @Type(() => terminalsUpdateWithoutOrder_actions_terminalsInput)
    update?: terminalsUpdateWithoutOrder_actions_terminalsInput;
}
