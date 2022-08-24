import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutDelivery_pricing_organization_idTousersInput } from './users-create-without-delivery-pricing-organization-id-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutDelivery_pricing_organization_idTousersInput } from './users-create-or-connect-without-delivery-pricing-organization-id-tousers.input';
import { usersUpsertWithoutDelivery_pricing_organization_idTousersInput } from './users-upsert-without-delivery-pricing-organization-id-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutDelivery_pricing_organization_idTousersInput } from './users-update-without-delivery-pricing-organization-id-tousers.input';

@InputType()
export class usersUpdateOneRequiredWithoutDelivery_pricing_organization_idTousersNestedInput {

    @Field(() => usersCreateWithoutDelivery_pricing_organization_idTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutDelivery_pricing_organization_idTousersInput)
    create?: usersCreateWithoutDelivery_pricing_organization_idTousersInput;

    @Field(() => usersCreateOrConnectWithoutDelivery_pricing_organization_idTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutDelivery_pricing_organization_idTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutDelivery_pricing_organization_idTousersInput;

    @Field(() => usersUpsertWithoutDelivery_pricing_organization_idTousersInput, {nullable:true})
    @Type(() => usersUpsertWithoutDelivery_pricing_organization_idTousersInput)
    upsert?: usersUpsertWithoutDelivery_pricing_organization_idTousersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutDelivery_pricing_organization_idTousersInput, {nullable:true})
    @Type(() => usersUpdateWithoutDelivery_pricing_organization_idTousersInput)
    update?: usersUpdateWithoutDelivery_pricing_organization_idTousersInput;
}
