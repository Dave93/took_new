import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { rolesUpdateWithoutUsers_rolesInput } from './roles-update-without-users-roles.input';
import { Type } from 'class-transformer';
import { rolesCreateWithoutUsers_rolesInput } from './roles-create-without-users-roles.input';

@InputType()
export class rolesUpsertWithoutUsers_rolesInput {

    @Field(() => rolesUpdateWithoutUsers_rolesInput, {nullable:false})
    @Type(() => rolesUpdateWithoutUsers_rolesInput)
    update!: rolesUpdateWithoutUsers_rolesInput;

    @Field(() => rolesCreateWithoutUsers_rolesInput, {nullable:false})
    @Type(() => rolesCreateWithoutUsers_rolesInput)
    create!: rolesCreateWithoutUsers_rolesInput;
}
