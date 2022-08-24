import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutOrganization_created_byTousersInput } from './users-update-without-organization-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutOrganization_created_byTousersInput } from './users-create-without-organization-created-by-tousers.input';

@InputType()
export class usersUpsertWithoutOrganization_created_byTousersInput {

    @Field(() => usersUpdateWithoutOrganization_created_byTousersInput, {nullable:false})
    @Type(() => usersUpdateWithoutOrganization_created_byTousersInput)
    update!: usersUpdateWithoutOrganization_created_byTousersInput;

    @Field(() => usersCreateWithoutOrganization_created_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutOrganization_created_byTousersInput)
    create!: usersCreateWithoutOrganization_created_byTousersInput;
}
