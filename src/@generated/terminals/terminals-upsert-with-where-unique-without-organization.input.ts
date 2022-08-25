import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';
import { Type } from 'class-transformer';
import { terminalsUpdateWithoutOrganizationInput } from './terminals-update-without-organization.input';
import { terminalsCreateWithoutOrganizationInput } from './terminals-create-without-organization.input';

@InputType()
export class terminalsUpsertWithWhereUniqueWithoutOrganizationInput {

    @Field(() => terminalsWhereUniqueInput, {nullable:false})
    @Type(() => terminalsWhereUniqueInput)
    where!: terminalsWhereUniqueInput;

    @Field(() => terminalsUpdateWithoutOrganizationInput, {nullable:false})
    @Type(() => terminalsUpdateWithoutOrganizationInput)
    update!: terminalsUpdateWithoutOrganizationInput;

    @Field(() => terminalsCreateWithoutOrganizationInput, {nullable:false})
    @Type(() => terminalsCreateWithoutOrganizationInput)
    create!: terminalsCreateWithoutOrganizationInput;
}
