import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_actionsIdTerminal_idCompoundUniqueInput } from './order-actions-id-terminal-id-compound-unique.input';

@InputType()
export class order_actionsWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => order_actionsIdTerminal_idCompoundUniqueInput, {nullable:true})
    id_terminal_id?: order_actionsIdTerminal_idCompoundUniqueInput;
}
