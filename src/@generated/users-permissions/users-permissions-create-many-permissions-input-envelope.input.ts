import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_permissionsCreateManyPermissionsInput } from './users-permissions-create-many-permissions.input';
import { Type } from 'class-transformer';

@InputType()
export class users_permissionsCreateManyPermissionsInputEnvelope {

    @Field(() => [users_permissionsCreateManyPermissionsInput], {nullable:false})
    @Type(() => users_permissionsCreateManyPermissionsInput)
    data!: Array<users_permissionsCreateManyPermissionsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
