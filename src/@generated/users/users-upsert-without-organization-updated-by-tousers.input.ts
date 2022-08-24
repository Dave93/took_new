import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutOrganization_updated_byTousersInput } from './users-update-without-organization-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutOrganization_updated_byTousersInput } from './users-create-without-organization-updated-by-tousers.input';

@InputType()
export class usersUpsertWithoutOrganization_updated_byTousersInput {

    @Field(() => usersUpdateWithoutOrganization_updated_byTousersInput, {nullable:false})
    @Type(() => usersUpdateWithoutOrganization_updated_byTousersInput)
    update!: usersUpdateWithoutOrganization_updated_byTousersInput;

    @Field(() => usersCreateWithoutOrganization_updated_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutOrganization_updated_byTousersInput)
    create!: usersCreateWithoutOrganization_updated_byTousersInput;
}
