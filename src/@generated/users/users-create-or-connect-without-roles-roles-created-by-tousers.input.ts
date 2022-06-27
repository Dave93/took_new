import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutRoles_roles_created_byTousersInput } from './users-create-without-roles-roles-created-by-tousers.input';

@InputType()
export class usersCreateOrConnectWithoutRoles_roles_created_byTousersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutRoles_roles_created_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutRoles_roles_created_byTousersInput)
    create!: usersCreateWithoutRoles_roles_created_byTousersInput;
}
