import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutOrder_bonus_pricing_created_byTousersInput } from './users-create-without-order-bonus-pricing-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutOrder_bonus_pricing_created_byTousersInput } from './users-create-or-connect-without-order-bonus-pricing-created-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutOrder_bonus_pricing_created_byTousersInput {

    @Field(() => usersCreateWithoutOrder_bonus_pricing_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutOrder_bonus_pricing_created_byTousersInput)
    create?: usersCreateWithoutOrder_bonus_pricing_created_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutOrder_bonus_pricing_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutOrder_bonus_pricing_created_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutOrder_bonus_pricing_created_byTousersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}
