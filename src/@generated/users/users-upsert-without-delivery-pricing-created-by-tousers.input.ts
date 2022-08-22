import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutDelivery_pricing_created_byTousersInput } from './users-update-without-delivery-pricing-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutDelivery_pricing_created_byTousersInput } from './users-create-without-delivery-pricing-created-by-tousers.input';

@InputType()
export class usersUpsertWithoutDelivery_pricing_created_byTousersInput {

    @Field(() => usersUpdateWithoutDelivery_pricing_created_byTousersInput, {nullable:false})
    @Type(() => usersUpdateWithoutDelivery_pricing_created_byTousersInput)
    update!: usersUpdateWithoutDelivery_pricing_created_byTousersInput;

    @Field(() => usersCreateWithoutDelivery_pricing_created_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutDelivery_pricing_created_byTousersInput)
    create!: usersCreateWithoutDelivery_pricing_created_byTousersInput;
}
