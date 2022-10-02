import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsUpdateWithoutDelivery_pricing_terminal_idTterminalInput } from './terminals-update-without-delivery-pricing-terminal-id-tterminal.input';
import { Type } from 'class-transformer';
import { terminalsCreateWithoutDelivery_pricing_terminal_idTterminalInput } from './terminals-create-without-delivery-pricing-terminal-id-tterminal.input';

@InputType()
export class terminalsUpsertWithoutDelivery_pricing_terminal_idTterminalInput {

    @Field(() => terminalsUpdateWithoutDelivery_pricing_terminal_idTterminalInput, {nullable:false})
    @Type(() => terminalsUpdateWithoutDelivery_pricing_terminal_idTterminalInput)
    update!: terminalsUpdateWithoutDelivery_pricing_terminal_idTterminalInput;

    @Field(() => terminalsCreateWithoutDelivery_pricing_terminal_idTterminalInput, {nullable:false})
    @Type(() => terminalsCreateWithoutDelivery_pricing_terminal_idTterminalInput)
    create!: terminalsCreateWithoutDelivery_pricing_terminal_idTterminalInput;
}
