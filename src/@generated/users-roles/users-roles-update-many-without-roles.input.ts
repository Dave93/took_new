import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_rolesCreateWithoutRolesInput } from './users-roles-create-without-roles.input';
import { Type } from 'class-transformer';
import { users_rolesCreateOrConnectWithoutRolesInput } from './users-roles-create-or-connect-without-roles.input';
import { users_rolesUpsertWithWhereUniqueWithoutRolesInput } from './users-roles-upsert-with-where-unique-without-roles.input';
import { users_rolesCreateManyRolesInputEnvelope } from './users-roles-create-many-roles-input-envelope.input';
import { users_rolesWhereUniqueInput } from './users-roles-where-unique.input';
import { users_rolesUpdateWithWhereUniqueWithoutRolesInput } from './users-roles-update-with-where-unique-without-roles.input';
import { users_rolesUpdateManyWithWhereWithoutRolesInput } from './users-roles-update-many-with-where-without-roles.input';
import { users_rolesScalarWhereInput } from './users-roles-scalar-where.input';

@InputType()
export class users_rolesUpdateManyWithoutRolesInput {

    @Field(() => [users_rolesCreateWithoutRolesInput], {nullable:true})
    @Type(() => users_rolesCreateWithoutRolesInput)
    create?: Array<users_rolesCreateWithoutRolesInput>;

    @Field(() => [users_rolesCreateOrConnectWithoutRolesInput], {nullable:true})
    @Type(() => users_rolesCreateOrConnectWithoutRolesInput)
    connectOrCreate?: Array<users_rolesCreateOrConnectWithoutRolesInput>;

    @Field(() => [users_rolesUpsertWithWhereUniqueWithoutRolesInput], {nullable:true})
    @Type(() => users_rolesUpsertWithWhereUniqueWithoutRolesInput)
    upsert?: Array<users_rolesUpsertWithWhereUniqueWithoutRolesInput>;

    @Field(() => users_rolesCreateManyRolesInputEnvelope, {nullable:true})
    @Type(() => users_rolesCreateManyRolesInputEnvelope)
    createMany?: users_rolesCreateManyRolesInputEnvelope;

    @Field(() => [users_rolesWhereUniqueInput], {nullable:true})
    @Type(() => users_rolesWhereUniqueInput)
    set?: Array<users_rolesWhereUniqueInput>;

    @Field(() => [users_rolesWhereUniqueInput], {nullable:true})
    @Type(() => users_rolesWhereUniqueInput)
    disconnect?: Array<users_rolesWhereUniqueInput>;

    @Field(() => [users_rolesWhereUniqueInput], {nullable:true})
    @Type(() => users_rolesWhereUniqueInput)
    delete?: Array<users_rolesWhereUniqueInput>;

    @Field(() => [users_rolesWhereUniqueInput], {nullable:true})
    @Type(() => users_rolesWhereUniqueInput)
    connect?: Array<users_rolesWhereUniqueInput>;

    @Field(() => [users_rolesUpdateWithWhereUniqueWithoutRolesInput], {nullable:true})
    @Type(() => users_rolesUpdateWithWhereUniqueWithoutRolesInput)
    update?: Array<users_rolesUpdateWithWhereUniqueWithoutRolesInput>;

    @Field(() => [users_rolesUpdateManyWithWhereWithoutRolesInput], {nullable:true})
    @Type(() => users_rolesUpdateManyWithWhereWithoutRolesInput)
    updateMany?: Array<users_rolesUpdateManyWithWhereWithoutRolesInput>;

    @Field(() => [users_rolesScalarWhereInput], {nullable:true})
    @Type(() => users_rolesScalarWhereInput)
    deleteMany?: Array<users_rolesScalarWhereInput>;
}
