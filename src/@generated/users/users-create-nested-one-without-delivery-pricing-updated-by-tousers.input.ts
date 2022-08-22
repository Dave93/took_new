import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutDelivery_pricing_updated_byTousersInput } from './users-create-without-delivery-pricing-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutDelivery_pricing_updated_byTousersInput } from './users-create-or-connect-without-delivery-pricing-updated-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutDelivery_pricing_updated_byTousersInput {

    @Field(() => usersCreateWithoutDelivery_pricing_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutDelivery_pricing_updated_byTousersInput)
    create?: usersCreateWithoutDelivery_pricing_updated_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutDelivery_pricing_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutDelivery_pricing_updated_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutDelivery_pricing_updated_byTousersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}
