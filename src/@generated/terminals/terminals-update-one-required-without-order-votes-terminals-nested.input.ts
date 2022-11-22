import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsCreateWithoutOrder_votes_terminalsInput } from './terminals-create-without-order-votes-terminals.input';
import { Type } from 'class-transformer';
import { terminalsCreateOrConnectWithoutOrder_votes_terminalsInput } from './terminals-create-or-connect-without-order-votes-terminals.input';
import { terminalsUpsertWithoutOrder_votes_terminalsInput } from './terminals-upsert-without-order-votes-terminals.input';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';
import { terminalsUpdateWithoutOrder_votes_terminalsInput } from './terminals-update-without-order-votes-terminals.input';

@InputType()
export class terminalsUpdateOneRequiredWithoutOrder_votes_terminalsNestedInput {

    @Field(() => terminalsCreateWithoutOrder_votes_terminalsInput, {nullable:true})
    @Type(() => terminalsCreateWithoutOrder_votes_terminalsInput)
    create?: terminalsCreateWithoutOrder_votes_terminalsInput;

    @Field(() => terminalsCreateOrConnectWithoutOrder_votes_terminalsInput, {nullable:true})
    @Type(() => terminalsCreateOrConnectWithoutOrder_votes_terminalsInput)
    connectOrCreate?: terminalsCreateOrConnectWithoutOrder_votes_terminalsInput;

    @Field(() => terminalsUpsertWithoutOrder_votes_terminalsInput, {nullable:true})
    @Type(() => terminalsUpsertWithoutOrder_votes_terminalsInput)
    upsert?: terminalsUpsertWithoutOrder_votes_terminalsInput;

    @Field(() => terminalsWhereUniqueInput, {nullable:true})
    @Type(() => terminalsWhereUniqueInput)
    connect?: terminalsWhereUniqueInput;

    @Field(() => terminalsUpdateWithoutOrder_votes_terminalsInput, {nullable:true})
    @Type(() => terminalsUpdateWithoutOrder_votes_terminalsInput)
    update?: terminalsUpdateWithoutOrder_votes_terminalsInput;
}
