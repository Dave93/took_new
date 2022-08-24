import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationWhereUniqueInput } from './organization-where-unique.input';
import { Type } from 'class-transformer';
import { organizationUpdateWithoutOrganization_updated_byTousersInput } from './organization-update-without-organization-updated-by-tousers.input';

@InputType()
export class organizationUpdateWithWhereUniqueWithoutOrganization_updated_byTousersInput {

    @Field(() => organizationWhereUniqueInput, {nullable:false})
    @Type(() => organizationWhereUniqueInput)
    where!: organizationWhereUniqueInput;

    @Field(() => organizationUpdateWithoutOrganization_updated_byTousersInput, {nullable:false})
    @Type(() => organizationUpdateWithoutOrganization_updated_byTousersInput)
    data!: organizationUpdateWithoutOrganization_updated_byTousersInput;
}
