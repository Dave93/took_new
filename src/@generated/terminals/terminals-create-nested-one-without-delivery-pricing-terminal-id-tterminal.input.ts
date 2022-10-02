import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsCreateWithoutDelivery_pricing_terminal_idTterminalInput } from './terminals-create-without-delivery-pricing-terminal-id-tterminal.input';
import { Type } from 'class-transformer';
import { terminalsCreateOrConnectWithoutDelivery_pricing_terminal_idTterminalInput } from './terminals-create-or-connect-without-delivery-pricing-terminal-id-tterminal.input';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';

@InputType()
export class terminalsCreateNestedOneWithoutDelivery_pricing_terminal_idTterminalInput {

    @Field(() => terminalsCreateWithoutDelivery_pricing_terminal_idTterminalInput, {nullable:true})
    @Type(() => terminalsCreateWithoutDelivery_pricing_terminal_idTterminalInput)
    create?: terminalsCreateWithoutDelivery_pricing_terminal_idTterminalInput;

    @Field(() => terminalsCreateOrConnectWithoutDelivery_pricing_terminal_idTterminalInput, {nullable:true})
    @Type(() => terminalsCreateOrConnectWithoutDelivery_pricing_terminal_idTterminalInput)
    connectOrCreate?: terminalsCreateOrConnectWithoutDelivery_pricing_terminal_idTterminalInput;

    @Field(() => terminalsWhereUniqueInput, {nullable:true})
    @Type(() => terminalsWhereUniqueInput)
    connect?: terminalsWhereUniqueInput;
}
