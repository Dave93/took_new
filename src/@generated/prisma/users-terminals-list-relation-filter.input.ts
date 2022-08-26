import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_terminalsWhereInput } from '../users-terminals/users-terminals-where.input';

@InputType()
export class Users_terminalsListRelationFilter {

    @Field(() => users_terminalsWhereInput, {nullable:true})
    every?: users_terminalsWhereInput;

    @Field(() => users_terminalsWhereInput, {nullable:true})
    some?: users_terminalsWhereInput;

    @Field(() => users_terminalsWhereInput, {nullable:true})
    none?: users_terminalsWhereInput;
}
