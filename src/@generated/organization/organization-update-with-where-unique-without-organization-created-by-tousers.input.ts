import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationWhereUniqueInput } from './organization-where-unique.input';
import { Type } from 'class-transformer';
import { organizationUpdateWithoutOrganization_created_byTousersInput } from './organization-update-without-organization-created-by-tousers.input';

@InputType()
export class organizationUpdateWithWhereUniqueWithoutOrganization_created_byTousersInput {

    @Field(() => organizationWhereUniqueInput, {nullable:false})
    @Type(() => organizationWhereUniqueInput)
    where!: organizationWhereUniqueInput;

    @Field(() => organizationUpdateWithoutOrganization_created_byTousersInput, {nullable:false})
    @Type(() => organizationUpdateWithoutOrganization_created_byTousersInput)
    data!: organizationUpdateWithoutOrganization_created_byTousersInput;
}
