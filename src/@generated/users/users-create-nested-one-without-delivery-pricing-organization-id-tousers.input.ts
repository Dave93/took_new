import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutDelivery_pricing_organization_idTousersInput } from './users-create-without-delivery-pricing-organization-id-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutDelivery_pricing_organization_idTousersInput } from './users-create-or-connect-without-delivery-pricing-organization-id-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutDelivery_pricing_organization_idTousersInput {

    @Field(() => usersCreateWithoutDelivery_pricing_organization_idTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutDelivery_pricing_organization_idTousersInput)
    create?: usersCreateWithoutDelivery_pricing_organization_idTousersInput;

    @Field(() => usersCreateOrConnectWithoutDelivery_pricing_organization_idTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutDelivery_pricing_organization_idTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutDelivery_pricing_organization_idTousersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}
