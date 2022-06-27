import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_rolesCreateManyUsers_usersTousers_roles_created_byInput } from './users-roles-create-many-users-users-tousers-roles-created-by.input';
import { Type } from 'class-transformer';

@InputType()
export class users_rolesCreateManyUsers_usersTousers_roles_created_byInputEnvelope {

    @Field(() => [users_rolesCreateManyUsers_usersTousers_roles_created_byInput], {nullable:false})
    @Type(() => users_rolesCreateManyUsers_usersTousers_roles_created_byInput)
    data!: Array<users_rolesCreateManyUsers_usersTousers_roles_created_byInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
