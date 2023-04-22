import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutOrder_bonus_pricing_courier_idTusersInput } from './users-create-without-order-bonus-pricing-courier-id-tusers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutOrder_bonus_pricing_courier_idTusersInput } from './users-create-or-connect-without-order-bonus-pricing-courier-id-tusers.input';
import { usersUpsertWithoutOrder_bonus_pricing_courier_idTusersInput } from './users-upsert-without-order-bonus-pricing-courier-id-tusers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutOrder_bonus_pricing_courier_idTusersInput } from './users-update-without-order-bonus-pricing-courier-id-tusers.input';

@InputType()
export class usersUpdateOneWithoutOrder_bonus_pricing_courier_idTusersNestedInput {

    @Field(() => usersCreateWithoutOrder_bonus_pricing_courier_idTusersInput, {nullable:true})
    @Type(() => usersCreateWithoutOrder_bonus_pricing_courier_idTusersInput)
    create?: usersCreateWithoutOrder_bonus_pricing_courier_idTusersInput;

    @Field(() => usersCreateOrConnectWithoutOrder_bonus_pricing_courier_idTusersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutOrder_bonus_pricing_courier_idTusersInput)
    connectOrCreate?: usersCreateOrConnectWithoutOrder_bonus_pricing_courier_idTusersInput;

    @Field(() => usersUpsertWithoutOrder_bonus_pricing_courier_idTusersInput, {nullable:true})
    @Type(() => usersUpsertWithoutOrder_bonus_pricing_courier_idTusersInput)
    upsert?: usersUpsertWithoutOrder_bonus_pricing_courier_idTusersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutOrder_bonus_pricing_courier_idTusersInput, {nullable:true})
    @Type(() => usersUpdateWithoutOrder_bonus_pricing_courier_idTusersInput)
    update?: usersUpdateWithoutOrder_bonus_pricing_courier_idTusersInput;
}
