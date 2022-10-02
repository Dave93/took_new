import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';
import { Type } from 'class-transformer';
import { terminalsCreateWithoutDelivery_pricing_terminal_idTterminalInput } from './terminals-create-without-delivery-pricing-terminal-id-tterminal.input';

@InputType()
export class terminalsCreateOrConnectWithoutDelivery_pricing_terminal_idTterminalInput {

    @Field(() => terminalsWhereUniqueInput, {nullable:false})
    @Type(() => terminalsWhereUniqueInput)
    where!: terminalsWhereUniqueInput;

    @Field(() => terminalsCreateWithoutDelivery_pricing_terminal_idTterminalInput, {nullable:false})
    @Type(() => terminalsCreateWithoutDelivery_pricing_terminal_idTterminalInput)
    create!: terminalsCreateWithoutDelivery_pricing_terminal_idTterminalInput;
}
