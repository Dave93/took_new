import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutRoles_roles_updated_byTousersInput } from './users-update-without-roles-roles-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutRoles_roles_updated_byTousersInput } from './users-create-without-roles-roles-updated-by-tousers.input';

@InputType()
export class usersUpsertWithoutRoles_roles_updated_byTousersInput {

    @Field(() => usersUpdateWithoutRoles_roles_updated_byTousersInput, {nullable:false})
    @Type(() => usersUpdateWithoutRoles_roles_updated_byTousersInput)
    update!: usersUpdateWithoutRoles_roles_updated_byTousersInput;

    @Field(() => usersCreateWithoutRoles_roles_updated_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutRoles_roles_updated_byTousersInput)
    create!: usersCreateWithoutRoles_roles_updated_byTousersInput;
}
