import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_rolesCreateWithoutRolesInput } from './users-roles-create-without-roles.input';
import { Type } from 'class-transformer';
import { users_rolesCreateOrConnectWithoutRolesInput } from './users-roles-create-or-connect-without-roles.input';
import { users_rolesCreateManyRolesInputEnvelope } from './users-roles-create-many-roles-input-envelope.input';
import { users_rolesWhereUniqueInput } from './users-roles-where-unique.input';

@InputType()
export class users_rolesUncheckedCreateNestedManyWithoutRolesInput {

    @Field(() => [users_rolesCreateWithoutRolesInput], {nullable:true})
    @Type(() => users_rolesCreateWithoutRolesInput)
    create?: Array<users_rolesCreateWithoutRolesInput>;

    @Field(() => [users_rolesCreateOrConnectWithoutRolesInput], {nullable:true})
    @Type(() => users_rolesCreateOrConnectWithoutRolesInput)
    connectOrCreate?: Array<users_rolesCreateOrConnectWithoutRolesInput>;

    @Field(() => users_rolesCreateManyRolesInputEnvelope, {nullable:true})
    @Type(() => users_rolesCreateManyRolesInputEnvelope)
    createMany?: users_rolesCreateManyRolesInputEnvelope;

    @Field(() => [users_rolesWhereUniqueInput], {nullable:true})
    @Type(() => users_rolesWhereUniqueInput)
    connect?: Array<users_rolesWhereUniqueInput>;
}
