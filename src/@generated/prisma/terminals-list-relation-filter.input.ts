import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsWhereInput } from '../terminals/terminals-where.input';

@InputType()
export class TerminalsListRelationFilter {

    @Field(() => terminalsWhereInput, {nullable:true})
    every?: terminalsWhereInput;

    @Field(() => terminalsWhereInput, {nullable:true})
    some?: terminalsWhereInput;

    @Field(() => terminalsWhereInput, {nullable:true})
    none?: terminalsWhereInput;
}
