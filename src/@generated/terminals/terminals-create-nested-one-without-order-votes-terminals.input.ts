import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsCreateWithoutOrder_votes_terminalsInput } from './terminals-create-without-order-votes-terminals.input';
import { Type } from 'class-transformer';
import { terminalsCreateOrConnectWithoutOrder_votes_terminalsInput } from './terminals-create-or-connect-without-order-votes-terminals.input';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';

@InputType()
export class terminalsCreateNestedOneWithoutOrder_votes_terminalsInput {

    @Field(() => terminalsCreateWithoutOrder_votes_terminalsInput, {nullable:true})
    @Type(() => terminalsCreateWithoutOrder_votes_terminalsInput)
    create?: terminalsCreateWithoutOrder_votes_terminalsInput;

    @Field(() => terminalsCreateOrConnectWithoutOrder_votes_terminalsInput, {nullable:true})
    @Type(() => terminalsCreateOrConnectWithoutOrder_votes_terminalsInput)
    connectOrCreate?: terminalsCreateOrConnectWithoutOrder_votes_terminalsInput;

    @Field(() => terminalsWhereUniqueInput, {nullable:true})
    @Type(() => terminalsWhereUniqueInput)
    connect?: terminalsWhereUniqueInput;
}
