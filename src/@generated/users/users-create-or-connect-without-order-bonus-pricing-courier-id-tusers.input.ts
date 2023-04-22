import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutOrder_bonus_pricing_courier_idTusersInput } from './users-create-without-order-bonus-pricing-courier-id-tusers.input';

@InputType()
export class usersCreateOrConnectWithoutOrder_bonus_pricing_courier_idTusersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutOrder_bonus_pricing_courier_idTusersInput, {nullable:false})
    @Type(() => usersCreateWithoutOrder_bonus_pricing_courier_idTusersInput)
    create!: usersCreateWithoutOrder_bonus_pricing_courier_idTusersInput;
}
