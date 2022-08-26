import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Users_terminalsMinAggregate {

    @Field(() => String, {nullable:true})
    user_id?: string;

    @Field(() => String, {nullable:true})
    terminal_id?: string;
}
