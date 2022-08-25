import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';
import { Type } from 'class-transformer';
import { terminalsUpdateWithoutOrganizationInput } from './terminals-update-without-organization.input';

@InputType()
export class terminalsUpdateWithWhereUniqueWithoutOrganizationInput {

    @Field(() => terminalsWhereUniqueInput, {nullable:false})
    @Type(() => terminalsWhereUniqueInput)
    where!: terminalsWhereUniqueInput;

    @Field(() => terminalsUpdateWithoutOrganizationInput, {nullable:false})
    @Type(() => terminalsUpdateWithoutOrganizationInput)
    data!: terminalsUpdateWithoutOrganizationInput;
}
