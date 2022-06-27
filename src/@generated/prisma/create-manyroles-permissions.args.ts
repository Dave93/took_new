import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { roles_permissionsCreateManyInput } from '../roles-permissions/roles-permissions-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyrolesPermissionsArgs {

    @Field(() => [roles_permissionsCreateManyInput], {nullable:false})
    @Type(() => roles_permissionsCreateManyInput)
    data!: Array<roles_permissionsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
