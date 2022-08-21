import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutRoles_roles_updated_byTousersInput } from './users-create-without-roles-roles-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutRoles_roles_updated_byTousersInput } from './users-create-or-connect-without-roles-roles-updated-by-tousers.input';
import { usersUpsertWithoutRoles_roles_updated_byTousersInput } from './users-upsert-without-roles-roles-updated-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutRoles_roles_updated_byTousersInput } from './users-update-without-roles-roles-updated-by-tousers.input';

@InputType()
export class usersUpdateOneWithoutRoles_roles_updated_byTousersNestedInput {

    @Field(() => usersCreateWithoutRoles_roles_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutRoles_roles_updated_byTousersInput)
    create?: usersCreateWithoutRoles_roles_updated_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutRoles_roles_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutRoles_roles_updated_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutRoles_roles_updated_byTousersInput;

    @Field(() => usersUpsertWithoutRoles_roles_updated_byTousersInput, {nullable:true})
    @Type(() => usersUpsertWithoutRoles_roles_updated_byTousersInput)
    upsert?: usersUpsertWithoutRoles_roles_updated_byTousersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutRoles_roles_updated_byTousersInput, {nullable:true})
    @Type(() => usersUpdateWithoutRoles_roles_updated_byTousersInput)
    update?: usersUpdateWithoutRoles_roles_updated_byTousersInput;
}
