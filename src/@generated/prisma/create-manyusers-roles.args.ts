import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { users_rolesCreateManyInput } from '../users-roles/users-roles-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyusersRolesArgs {

    @Field(() => [users_rolesCreateManyInput], {nullable:false})
    @Type(() => users_rolesCreateManyInput)
    data!: Array<users_rolesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
