import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { courier_terminal_balanceScalarWhereInput } from './courier-terminal-balance-scalar-where.input';
import { Type } from 'class-transformer';
import { courier_terminal_balanceUpdateManyMutationInput } from './courier-terminal-balance-update-many-mutation.input';

@InputType()
export class courier_terminal_balanceUpdateManyWithWhereWithoutCourier_terminal_balance_created_byTousersInput {

    @Field(() => courier_terminal_balanceScalarWhereInput, {nullable:false})
    @Type(() => courier_terminal_balanceScalarWhereInput)
    where!: courier_terminal_balanceScalarWhereInput;

    @Field(() => courier_terminal_balanceUpdateManyMutationInput, {nullable:false})
    @Type(() => courier_terminal_balanceUpdateManyMutationInput)
    data!: courier_terminal_balanceUpdateManyMutationInput;
}
