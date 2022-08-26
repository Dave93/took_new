import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { users } from '../users/users.model';
import { terminals } from '../terminals/terminals.model';

@ObjectType()
export class users_terminals {

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => String, {nullable:false})
    terminal_id!: string;

    @Field(() => users, {nullable:false})
    users?: users;

    @Field(() => terminals, {nullable:false})
    terminals?: terminals;
}
