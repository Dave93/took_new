import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutOrder_bonus_pricing_courier_idTusersInput } from './users-update-without-order-bonus-pricing-courier-id-tusers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutOrder_bonus_pricing_courier_idTusersInput } from './users-create-without-order-bonus-pricing-courier-id-tusers.input';

@InputType()
export class usersUpsertWithoutOrder_bonus_pricing_courier_idTusersInput {

    @Field(() => usersUpdateWithoutOrder_bonus_pricing_courier_idTusersInput, {nullable:false})
    @Type(() => usersUpdateWithoutOrder_bonus_pricing_courier_idTusersInput)
    update!: usersUpdateWithoutOrder_bonus_pricing_courier_idTusersInput;

    @Field(() => usersCreateWithoutOrder_bonus_pricing_courier_idTusersInput, {nullable:false})
    @Type(() => usersCreateWithoutOrder_bonus_pricing_courier_idTusersInput)
    create!: usersCreateWithoutOrder_bonus_pricing_courier_idTusersInput;
}
