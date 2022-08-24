import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutDelivery_pricing_organization_idTousersInput } from './users-create-without-delivery-pricing-organization-id-tousers.input';

@InputType()
export class usersCreateOrConnectWithoutDelivery_pricing_organization_idTousersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutDelivery_pricing_organization_idTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutDelivery_pricing_organization_idTousersInput)
    create!: usersCreateWithoutDelivery_pricing_organization_idTousersInput;
}
