import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutRoles_roles_created_byTousersInput } from './users-create-without-roles-roles-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutRoles_roles_created_byTousersInput } from './users-create-or-connect-without-roles-roles-created-by-tousers.input';
import { usersUpsertWithoutRoles_roles_created_byTousersInput } from './users-upsert-without-roles-roles-created-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutRoles_roles_created_byTousersInput } from './users-update-without-roles-roles-created-by-tousers.input';

@InputType()
export class usersUpdateOneWithoutRoles_roles_created_byTousersNestedInput {

    @Field(() => usersCreateWithoutRoles_roles_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutRoles_roles_created_byTousersInput)
    create?: usersCreateWithoutRoles_roles_created_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutRoles_roles_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutRoles_roles_created_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutRoles_roles_created_byTousersInput;

    @Field(() => usersUpsertWithoutRoles_roles_created_byTousersInput, {nullable:true})
    @Type(() => usersUpsertWithoutRoles_roles_created_byTousersInput)
    upsert?: usersUpsertWithoutRoles_roles_created_byTousersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutRoles_roles_created_byTousersInput, {nullable:true})
    @Type(() => usersUpdateWithoutRoles_roles_created_byTousersInput)
    update?: usersUpdateWithoutRoles_roles_created_byTousersInput;
}
