import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationWhereUniqueInput } from './organization-where-unique.input';
import { Type } from 'class-transformer';
import { organizationUpdateWithoutOrganization_updated_byTousersInput } from './organization-update-without-organization-updated-by-tousers.input';
import { organizationCreateWithoutOrganization_updated_byTousersInput } from './organization-create-without-organization-updated-by-tousers.input';

@InputType()
export class organizationUpsertWithWhereUniqueWithoutOrganization_updated_byTousersInput {

    @Field(() => organizationWhereUniqueInput, {nullable:false})
    @Type(() => organizationWhereUniqueInput)
    where!: organizationWhereUniqueInput;

    @Field(() => organizationUpdateWithoutOrganization_updated_byTousersInput, {nullable:false})
    @Type(() => organizationUpdateWithoutOrganization_updated_byTousersInput)
    update!: organizationUpdateWithoutOrganization_updated_byTousersInput;

    @Field(() => organizationCreateWithoutOrganization_updated_byTousersInput, {nullable:false})
    @Type(() => organizationCreateWithoutOrganization_updated_byTousersInput)
    create!: organizationCreateWithoutOrganization_updated_byTousersInput;
}
