import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutDelivery_pricing_updated_byTousersInput } from './users-create-without-delivery-pricing-updated-by-tousers.input';

@InputType()
export class usersCreateOrConnectWithoutDelivery_pricing_updated_byTousersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutDelivery_pricing_updated_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutDelivery_pricing_updated_byTousersInput)
    create!: usersCreateWithoutDelivery_pricing_updated_byTousersInput;
}
