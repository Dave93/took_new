import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { roles_permissionsCreateManyRolesInput } from './roles-permissions-create-many-roles.input';
import { Type } from 'class-transformer';

@InputType()
export class roles_permissionsCreateManyRolesInputEnvelope {

    @Field(() => [roles_permissionsCreateManyRolesInput], {nullable:false})
    @Type(() => roles_permissionsCreateManyRolesInput)
    data!: Array<roles_permissionsCreateManyRolesInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
