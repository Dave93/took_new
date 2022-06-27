import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { rolesCreateWithoutUsers_roles_updated_byTousersInput } from './roles-create-without-users-roles-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { rolesCreateOrConnectWithoutUsers_roles_updated_byTousersInput } from './roles-create-or-connect-without-users-roles-updated-by-tousers.input';
import { rolesCreateManyUsers_roles_updated_byTousersInputEnvelope } from './roles-create-many-users-roles-updated-by-tousers-input-envelope.input';
import { rolesWhereUniqueInput } from './roles-where-unique.input';

@InputType()
export class rolesUncheckedCreateNestedManyWithoutUsers_roles_updated_byTousersInput {

    @Field(() => [rolesCreateWithoutUsers_roles_updated_byTousersInput], {nullable:true})
    @Type(() => rolesCreateWithoutUsers_roles_updated_byTousersInput)
    create?: Array<rolesCreateWithoutUsers_roles_updated_byTousersInput>;

    @Field(() => [rolesCreateOrConnectWithoutUsers_roles_updated_byTousersInput], {nullable:true})
    @Type(() => rolesCreateOrConnectWithoutUsers_roles_updated_byTousersInput)
    connectOrCreate?: Array<rolesCreateOrConnectWithoutUsers_roles_updated_byTousersInput>;

    @Field(() => rolesCreateManyUsers_roles_updated_byTousersInputEnvelope, {nullable:true})
    @Type(() => rolesCreateManyUsers_roles_updated_byTousersInputEnvelope)
    createMany?: rolesCreateManyUsers_roles_updated_byTousersInputEnvelope;

    @Field(() => [rolesWhereUniqueInput], {nullable:true})
    @Type(() => rolesWhereUniqueInput)
    connect?: Array<rolesWhereUniqueInput>;
}
