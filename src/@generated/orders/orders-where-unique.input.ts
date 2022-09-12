import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersIdTerminal_idCompoundUniqueInput } from './orders-id-terminal-id-compound-unique.input';

@InputType()
export class ordersWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => ordersIdTerminal_idCompoundUniqueInput, {nullable:true})
    id_terminal_id?: ordersIdTerminal_idCompoundUniqueInput;
}
