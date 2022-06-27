import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { roles_permissionsCreateWithoutRolesInput } from './roles-permissions-create-without-roles.input';
import { Type } from 'class-transformer';
import { roles_permissionsCreateOrConnectWithoutRolesInput } from './roles-permissions-create-or-connect-without-roles.input';
import { roles_permissionsCreateManyRolesInputEnvelope } from './roles-permissions-create-many-roles-input-envelope.input';
import { roles_permissionsWhereUniqueInput } from './roles-permissions-where-unique.input';

@InputType()
export class roles_permissionsUncheckedCreateNestedManyWithoutRolesInput {

    @Field(() => [roles_permissionsCreateWithoutRolesInput], {nullable:true})
    @Type(() => roles_permissionsCreateWithoutRolesInput)
    create?: Array<roles_permissionsCreateWithoutRolesInput>;

    @Field(() => [roles_permissionsCreateOrConnectWithoutRolesInput], {nullable:true})
    @Type(() => roles_permissionsCreateOrConnectWithoutRolesInput)
    connectOrCreate?: Array<roles_permissionsCreateOrConnectWithoutRolesInput>;

    @Field(() => roles_permissionsCreateManyRolesInputEnvelope, {nullable:true})
    @Type(() => roles_permissionsCreateManyRolesInputEnvelope)
    createMany?: roles_permissionsCreateManyRolesInputEnvelope;

    @Field(() => [roles_permissionsWhereUniqueInput], {nullable:true})
    @Type(() => roles_permissionsWhereUniqueInput)
    connect?: Array<roles_permissionsWhereUniqueInput>;
}
