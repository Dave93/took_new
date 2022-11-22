import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';
import { Type } from 'class-transformer';
import { terminalsCreateWithoutOrder_votes_terminalsInput } from './terminals-create-without-order-votes-terminals.input';

@InputType()
export class terminalsCreateOrConnectWithoutOrder_votes_terminalsInput {

    @Field(() => terminalsWhereUniqueInput, {nullable:false})
    @Type(() => terminalsWhereUniqueInput)
    where!: terminalsWhereUniqueInput;

    @Field(() => terminalsCreateWithoutOrder_votes_terminalsInput, {nullable:false})
    @Type(() => terminalsCreateWithoutOrder_votes_terminalsInput)
    create!: terminalsCreateWithoutOrder_votes_terminalsInput;
}
