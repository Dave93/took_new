import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { users_permissionsCreateManyInput } from '../users-permissions/users-permissions-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyusersPermissionsArgs {

    @Field(() => [users_permissionsCreateManyInput], {nullable:false})
    @Type(() => users_permissionsCreateManyInput)
    data!: Array<users_permissionsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
