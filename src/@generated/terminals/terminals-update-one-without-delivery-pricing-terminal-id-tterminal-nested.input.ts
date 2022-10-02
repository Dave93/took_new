import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsCreateWithoutDelivery_pricing_terminal_idTterminalInput } from './terminals-create-without-delivery-pricing-terminal-id-tterminal.input';
import { Type } from 'class-transformer';
import { terminalsCreateOrConnectWithoutDelivery_pricing_terminal_idTterminalInput } from './terminals-create-or-connect-without-delivery-pricing-terminal-id-tterminal.input';
import { terminalsUpsertWithoutDelivery_pricing_terminal_idTterminalInput } from './terminals-upsert-without-delivery-pricing-terminal-id-tterminal.input';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';
import { terminalsUpdateWithoutDelivery_pricing_terminal_idTterminalInput } from './terminals-update-without-delivery-pricing-terminal-id-tterminal.input';

@InputType()
export class terminalsUpdateOneWithoutDelivery_pricing_terminal_idTterminalNestedInput {

    @Field(() => terminalsCreateWithoutDelivery_pricing_terminal_idTterminalInput, {nullable:true})
    @Type(() => terminalsCreateWithoutDelivery_pricing_terminal_idTterminalInput)
    create?: terminalsCreateWithoutDelivery_pricing_terminal_idTterminalInput;

    @Field(() => terminalsCreateOrConnectWithoutDelivery_pricing_terminal_idTterminalInput, {nullable:true})
    @Type(() => terminalsCreateOrConnectWithoutDelivery_pricing_terminal_idTterminalInput)
    connectOrCreate?: terminalsCreateOrConnectWithoutDelivery_pricing_terminal_idTterminalInput;

    @Field(() => terminalsUpsertWithoutDelivery_pricing_terminal_idTterminalInput, {nullable:true})
    @Type(() => terminalsUpsertWithoutDelivery_pricing_terminal_idTterminalInput)
    upsert?: terminalsUpsertWithoutDelivery_pricing_terminal_idTterminalInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => terminalsWhereUniqueInput, {nullable:true})
    @Type(() => terminalsWhereUniqueInput)
    connect?: terminalsWhereUniqueInput;

    @Field(() => terminalsUpdateWithoutDelivery_pricing_terminal_idTterminalInput, {nullable:true})
    @Type(() => terminalsUpdateWithoutDelivery_pricing_terminal_idTterminalInput)
    update?: terminalsUpdateWithoutDelivery_pricing_terminal_idTterminalInput;
}
