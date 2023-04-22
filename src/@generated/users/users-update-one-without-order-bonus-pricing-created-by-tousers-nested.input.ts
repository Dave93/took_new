import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutOrder_bonus_pricing_created_byTousersInput } from './users-create-without-order-bonus-pricing-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutOrder_bonus_pricing_created_byTousersInput } from './users-create-or-connect-without-order-bonus-pricing-created-by-tousers.input';
import { usersUpsertWithoutOrder_bonus_pricing_created_byTousersInput } from './users-upsert-without-order-bonus-pricing-created-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutOrder_bonus_pricing_created_byTousersInput } from './users-update-without-order-bonus-pricing-created-by-tousers.input';

@InputType()
export class usersUpdateOneWithoutOrder_bonus_pricing_created_byTousersNestedInput {

    @Field(() => usersCreateWithoutOrder_bonus_pricing_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutOrder_bonus_pricing_created_byTousersInput)
    create?: usersCreateWithoutOrder_bonus_pricing_created_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutOrder_bonus_pricing_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutOrder_bonus_pricing_created_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutOrder_bonus_pricing_created_byTousersInput;

    @Field(() => usersUpsertWithoutOrder_bonus_pricing_created_byTousersInput, {nullable:true})
    @Type(() => usersUpsertWithoutOrder_bonus_pricing_created_byTousersInput)
    upsert?: usersUpsertWithoutOrder_bonus_pricing_created_byTousersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutOrder_bonus_pricing_created_byTousersInput, {nullable:true})
    @Type(() => usersUpdateWithoutOrder_bonus_pricing_created_byTousersInput)
    update?: usersUpdateWithoutOrder_bonus_pricing_created_byTousersInput;
}
