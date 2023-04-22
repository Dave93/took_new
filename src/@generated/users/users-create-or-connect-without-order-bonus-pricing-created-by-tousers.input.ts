import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutOrder_bonus_pricing_created_byTousersInput } from './users-create-without-order-bonus-pricing-created-by-tousers.input';

@InputType()
export class usersCreateOrConnectWithoutOrder_bonus_pricing_created_byTousersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutOrder_bonus_pricing_created_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutOrder_bonus_pricing_created_byTousersInput)
    create!: usersCreateWithoutOrder_bonus_pricing_created_byTousersInput;
}
