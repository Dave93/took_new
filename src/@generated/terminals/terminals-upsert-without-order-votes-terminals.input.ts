import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsUpdateWithoutOrder_votes_terminalsInput } from './terminals-update-without-order-votes-terminals.input';
import { Type } from 'class-transformer';
import { terminalsCreateWithoutOrder_votes_terminalsInput } from './terminals-create-without-order-votes-terminals.input';

@InputType()
export class terminalsUpsertWithoutOrder_votes_terminalsInput {

    @Field(() => terminalsUpdateWithoutOrder_votes_terminalsInput, {nullable:false})
    @Type(() => terminalsUpdateWithoutOrder_votes_terminalsInput)
    update!: terminalsUpdateWithoutOrder_votes_terminalsInput;

    @Field(() => terminalsCreateWithoutOrder_votes_terminalsInput, {nullable:false})
    @Type(() => terminalsCreateWithoutOrder_votes_terminalsInput)
    create!: terminalsCreateWithoutOrder_votes_terminalsInput;
}
