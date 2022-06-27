import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutRoles_roles_created_byTousersInput } from './users-create-without-roles-roles-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutRoles_roles_created_byTousersInput } from './users-create-or-connect-without-roles-roles-created-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutRoles_roles_created_byTousersInput {

    @Field(() => usersCreateWithoutRoles_roles_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutRoles_roles_created_byTousersInput)
    create?: usersCreateWithoutRoles_roles_created_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutRoles_roles_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutRoles_roles_created_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutRoles_roles_created_byTousersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}
