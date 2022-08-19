import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { rolesCreateWithoutUsers_roles_created_byTousersInput } from './roles-create-without-users-roles-created-by-tousers.input';
import { Type } from 'class-transformer';
import { rolesCreateOrConnectWithoutUsers_roles_created_byTousersInput } from './roles-create-or-connect-without-users-roles-created-by-tousers.input';
import { rolesUpsertWithWhereUniqueWithoutUsers_roles_created_byTousersInput } from './roles-upsert-with-where-unique-without-users-roles-created-by-tousers.input';
import { rolesCreateManyUsers_roles_created_byTousersInputEnvelope } from './roles-create-many-users-roles-created-by-tousers-input-envelope.input';
import { rolesWhereUniqueInput } from './roles-where-unique.input';
import { rolesUpdateWithWhereUniqueWithoutUsers_roles_created_byTousersInput } from './roles-update-with-where-unique-without-users-roles-created-by-tousers.input';
import { rolesUpdateManyWithWhereWithoutUsers_roles_created_byTousersInput } from './roles-update-many-with-where-without-users-roles-created-by-tousers.input';
import { rolesScalarWhereInput } from './roles-scalar-where.input';

@InputType()
export class rolesUpdateManyWithoutUsers_roles_created_byTousersNestedInput {

    @Field(() => [rolesCreateWithoutUsers_roles_created_byTousersInput], {nullable:true})
    @Type(() => rolesCreateWithoutUsers_roles_created_byTousersInput)
    create?: Array<rolesCreateWithoutUsers_roles_created_byTousersInput>;

    @Field(() => [rolesCreateOrConnectWithoutUsers_roles_created_byTousersInput], {nullable:true})
    @Type(() => rolesCreateOrConnectWithoutUsers_roles_created_byTousersInput)
    connectOrCreate?: Array<rolesCreateOrConnectWithoutUsers_roles_created_byTousersInput>;

    @Field(() => [rolesUpsertWithWhereUniqueWithoutUsers_roles_created_byTousersInput], {nullable:true})
    @Type(() => rolesUpsertWithWhereUniqueWithoutUsers_roles_created_byTousersInput)
    upsert?: Array<rolesUpsertWithWhereUniqueWithoutUsers_roles_created_byTousersInput>;

    @Field(() => rolesCreateManyUsers_roles_created_byTousersInputEnvelope, {nullable:true})
    @Type(() => rolesCreateManyUsers_roles_created_byTousersInputEnvelope)
    createMany?: rolesCreateManyUsers_roles_created_byTousersInputEnvelope;

    @Field(() => [rolesWhereUniqueInput], {nullable:true})
    @Type(() => rolesWhereUniqueInput)
    set?: Array<rolesWhereUniqueInput>;

    @Field(() => [rolesWhereUniqueInput], {nullable:true})
    @Type(() => rolesWhereUniqueInput)
    disconnect?: Array<rolesWhereUniqueInput>;

    @Field(() => [rolesWhereUniqueInput], {nullable:true})
    @Type(() => rolesWhereUniqueInput)
    delete?: Array<rolesWhereUniqueInput>;

    @Field(() => [rolesWhereUniqueInput], {nullable:true})
    @Type(() => rolesWhereUniqueInput)
    connect?: Array<rolesWhereUniqueInput>;

    @Field(() => [rolesUpdateWithWhereUniqueWithoutUsers_roles_created_byTousersInput], {nullable:true})
    @Type(() => rolesUpdateWithWhereUniqueWithoutUsers_roles_created_byTousersInput)
    update?: Array<rolesUpdateWithWhereUniqueWithoutUsers_roles_created_byTousersInput>;

    @Field(() => [rolesUpdateManyWithWhereWithoutUsers_roles_created_byTousersInput], {nullable:true})
    @Type(() => rolesUpdateManyWithWhereWithoutUsers_roles_created_byTousersInput)
    updateMany?: Array<rolesUpdateManyWithWhereWithoutUsers_roles_created_byTousersInput>;

    @Field(() => [rolesScalarWhereInput], {nullable:true})
    @Type(() => rolesScalarWhereInput)
    deleteMany?: Array<rolesScalarWhereInput>;
}
