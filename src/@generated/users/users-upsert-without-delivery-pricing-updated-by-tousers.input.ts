import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutDelivery_pricing_updated_byTousersInput } from './users-update-without-delivery-pricing-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutDelivery_pricing_updated_byTousersInput } from './users-create-without-delivery-pricing-updated-by-tousers.input';

@InputType()
export class usersUpsertWithoutDelivery_pricing_updated_byTousersInput {

    @Field(() => usersUpdateWithoutDelivery_pricing_updated_byTousersInput, {nullable:false})
    @Type(() => usersUpdateWithoutDelivery_pricing_updated_byTousersInput)
    update!: usersUpdateWithoutDelivery_pricing_updated_byTousersInput;

    @Field(() => usersCreateWithoutDelivery_pricing_updated_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutDelivery_pricing_updated_byTousersInput)
    create!: usersCreateWithoutDelivery_pricing_updated_byTousersInput;
}
