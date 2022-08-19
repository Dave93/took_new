import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { rolesCreateWithoutUsers_roles_updated_byTousersInput } from './roles-create-without-users-roles-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { rolesCreateOrConnectWithoutUsers_roles_updated_byTousersInput } from './roles-create-or-connect-without-users-roles-updated-by-tousers.input';
import { rolesUpsertWithWhereUniqueWithoutUsers_roles_updated_byTousersInput } from './roles-upsert-with-where-unique-without-users-roles-updated-by-tousers.input';
import { rolesCreateManyUsers_roles_updated_byTousersInputEnvelope } from './roles-create-many-users-roles-updated-by-tousers-input-envelope.input';
import { rolesWhereUniqueInput } from './roles-where-unique.input';
import { rolesUpdateWithWhereUniqueWithoutUsers_roles_updated_byTousersInput } from './roles-update-with-where-unique-without-users-roles-updated-by-tousers.input';
import { rolesUpdateManyWithWhereWithoutUsers_roles_updated_byTousersInput } from './roles-update-many-with-where-without-users-roles-updated-by-tousers.input';
import { rolesScalarWhereInput } from './roles-scalar-where.input';

@InputType()
export class rolesUpdateManyWithoutUsers_roles_updated_byTousersNestedInput {

    @Field(() => [rolesCreateWithoutUsers_roles_updated_byTousersInput], {nullable:true})
    @Type(() => rolesCreateWithoutUsers_roles_updated_byTousersInput)
    create?: Array<rolesCreateWithoutUsers_roles_updated_byTousersInput>;

    @Field(() => [rolesCreateOrConnectWithoutUsers_roles_updated_byTousersInput], {nullable:true})
    @Type(() => rolesCreateOrConnectWithoutUsers_roles_updated_byTousersInput)
    connectOrCreate?: Array<rolesCreateOrConnectWithoutUsers_roles_updated_byTousersInput>;

    @Field(() => [rolesUpsertWithWhereUniqueWithoutUsers_roles_updated_byTousersInput], {nullable:true})
    @Type(() => rolesUpsertWithWhereUniqueWithoutUsers_roles_updated_byTousersInput)
    upsert?: Array<rolesUpsertWithWhereUniqueWithoutUsers_roles_updated_byTousersInput>;

    @Field(() => rolesCreateManyUsers_roles_updated_byTousersInputEnvelope, {nullable:true})
    @Type(() => rolesCreateManyUsers_roles_updated_byTousersInputEnvelope)
    createMany?: rolesCreateManyUsers_roles_updated_byTousersInputEnvelope;

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

    @Field(() => [rolesUpdateWithWhereUniqueWithoutUsers_roles_updated_byTousersInput], {nullable:true})
    @Type(() => rolesUpdateWithWhereUniqueWithoutUsers_roles_updated_byTousersInput)
    update?: Array<rolesUpdateWithWhereUniqueWithoutUsers_roles_updated_byTousersInput>;

    @Field(() => [rolesUpdateManyWithWhereWithoutUsers_roles_updated_byTousersInput], {nullable:true})
    @Type(() => rolesUpdateManyWithWhereWithoutUsers_roles_updated_byTousersInput)
    updateMany?: Array<rolesUpdateManyWithWhereWithoutUsers_roles_updated_byTousersInput>;

    @Field(() => [rolesScalarWhereInput], {nullable:true})
    @Type(() => rolesScalarWhereInput)
    deleteMany?: Array<rolesScalarWhereInput>;
}
