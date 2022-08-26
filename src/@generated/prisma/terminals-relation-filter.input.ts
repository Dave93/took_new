import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsWhereInput } from '../terminals/terminals-where.input';

@InputType()
export class TerminalsRelationFilter {

    @Field(() => terminalsWhereInput, {nullable:true})
    is?: terminalsWhereInput;

    @Field(() => terminalsWhereInput, {nullable:true})
    isNot?: terminalsWhereInput;
}
