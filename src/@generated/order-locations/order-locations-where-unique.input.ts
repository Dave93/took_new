import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_locationsIdTerminal_idCompoundUniqueInput } from './order-locations-id-terminal-id-compound-unique.input';

@InputType()
export class order_locationsWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => order_locationsIdTerminal_idCompoundUniqueInput, {nullable:true})
    id_terminal_id?: order_locationsIdTerminal_idCompoundUniqueInput;
}
