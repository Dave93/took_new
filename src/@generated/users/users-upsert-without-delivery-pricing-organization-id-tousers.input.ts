import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutDelivery_pricing_organization_idTousersInput } from './users-update-without-delivery-pricing-organization-id-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutDelivery_pricing_organization_idTousersInput } from './users-create-without-delivery-pricing-organization-id-tousers.input';

@InputType()
export class usersUpsertWithoutDelivery_pricing_organization_idTousersInput {

    @Field(() => usersUpdateWithoutDelivery_pricing_organization_idTousersInput, {nullable:false})
    @Type(() => usersUpdateWithoutDelivery_pricing_organization_idTousersInput)
    update!: usersUpdateWithoutDelivery_pricing_organization_idTousersInput;

    @Field(() => usersCreateWithoutDelivery_pricing_organization_idTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutDelivery_pricing_organization_idTousersInput)
    create!: usersCreateWithoutDelivery_pricing_organization_idTousersInput;
}
