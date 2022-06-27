import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { roles_permissionsCreateManyPermissionsInput } from './roles-permissions-create-many-permissions.input';
import { Type } from 'class-transformer';

@InputType()
export class roles_permissionsCreateManyPermissionsInputEnvelope {

    @Field(() => [roles_permissionsCreateManyPermissionsInput], {nullable:false})
    @Type(() => roles_permissionsCreateManyPermissionsInput)
    data!: Array<roles_permissionsCreateManyPermissionsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
