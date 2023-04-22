import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutOrder_bonus_pricing_courier_idTusersInput } from './users-create-without-order-bonus-pricing-courier-id-tusers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutOrder_bonus_pricing_courier_idTusersInput } from './users-create-or-connect-without-order-bonus-pricing-courier-id-tusers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutOrder_bonus_pricing_courier_idTusersInput {

    @Field(() => usersCreateWithoutOrder_bonus_pricing_courier_idTusersInput, {nullable:true})
    @Type(() => usersCreateWithoutOrder_bonus_pricing_courier_idTusersInput)
    create?: usersCreateWithoutOrder_bonus_pricing_courier_idTusersInput;

    @Field(() => usersCreateOrConnectWithoutOrder_bonus_pricing_courier_idTusersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutOrder_bonus_pricing_courier_idTusersInput)
    connectOrCreate?: usersCreateOrConnectWithoutOrder_bonus_pricing_courier_idTusersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}
