import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';
import { Type } from 'class-transformer';
import { terminalsCreateWithoutOrganizationInput } from './terminals-create-without-organization.input';

@InputType()
export class terminalsCreateOrConnectWithoutOrganizationInput {

    @Field(() => terminalsWhereUniqueInput, {nullable:false})
    @Type(() => terminalsWhereUniqueInput)
    where!: terminalsWhereUniqueInput;

    @Field(() => terminalsCreateWithoutOrganizationInput, {nullable:false})
    @Type(() => terminalsCreateWithoutOrganizationInput)
    create!: terminalsCreateWithoutOrganizationInput;
}
