import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutDelivery_pricing_created_byTousersInput } from './users-create-without-delivery-pricing-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutDelivery_pricing_created_byTousersInput } from './users-create-or-connect-without-delivery-pricing-created-by-tousers.input';
import { usersUpsertWithoutDelivery_pricing_created_byTousersInput } from './users-upsert-without-delivery-pricing-created-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutDelivery_pricing_created_byTousersInput } from './users-update-without-delivery-pricing-created-by-tousers.input';

@InputType()
export class usersUpdateOneWithoutDelivery_pricing_created_byTousersNestedInput {

    @Field(() => usersCreateWithoutDelivery_pricing_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutDelivery_pricing_created_byTousersInput)
    create?: usersCreateWithoutDelivery_pricing_created_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutDelivery_pricing_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutDelivery_pricing_created_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutDelivery_pricing_created_byTousersInput;

    @Field(() => usersUpsertWithoutDelivery_pricing_created_byTousersInput, {nullable:true})
    @Type(() => usersUpsertWithoutDelivery_pricing_created_byTousersInput)
    upsert?: usersUpsertWithoutDelivery_pricing_created_byTousersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutDelivery_pricing_created_byTousersInput, {nullable:true})
    @Type(() => usersUpdateWithoutDelivery_pricing_created_byTousersInput)
    update?: usersUpdateWithoutDelivery_pricing_created_byTousersInput;
}
