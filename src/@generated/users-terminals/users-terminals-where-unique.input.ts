import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_terminalsUser_idTerminal_idCompoundUniqueInput } from './users-terminals-user-id-terminal-id-compound-unique.input';

@InputType()
export class users_terminalsWhereUniqueInput {

    @Field(() => users_terminalsUser_idTerminal_idCompoundUniqueInput, {nullable:true})
    user_id_terminal_id?: users_terminalsUser_idTerminal_idCompoundUniqueInput;
}
