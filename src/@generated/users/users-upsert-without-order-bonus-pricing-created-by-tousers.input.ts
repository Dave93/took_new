import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutOrder_bonus_pricing_created_byTousersInput } from './users-update-without-order-bonus-pricing-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutOrder_bonus_pricing_created_byTousersInput } from './users-create-without-order-bonus-pricing-created-by-tousers.input';

@InputType()
export class usersUpsertWithoutOrder_bonus_pricing_created_byTousersInput {

    @Field(() => usersUpdateWithoutOrder_bonus_pricing_created_byTousersInput, {nullable:false})
    @Type(() => usersUpdateWithoutOrder_bonus_pricing_created_byTousersInput)
    update!: usersUpdateWithoutOrder_bonus_pricing_created_byTousersInput;

    @Field(() => usersCreateWithoutOrder_bonus_pricing_created_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutOrder_bonus_pricing_created_byTousersInput)
    create!: usersCreateWithoutOrder_bonus_pricing_created_byTousersInput;
}
