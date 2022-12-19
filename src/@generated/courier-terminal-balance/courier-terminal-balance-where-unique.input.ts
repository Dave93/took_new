import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class courier_terminal_balanceWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;
}
