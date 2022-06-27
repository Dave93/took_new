import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_rolesCreateManyUsers_usersTousers_roles_updated_byInput } from './users-roles-create-many-users-users-tousers-roles-updated-by.input';
import { Type } from 'class-transformer';

@InputType()
export class users_rolesCreateManyUsers_usersTousers_roles_updated_byInputEnvelope {

    @Field(() => [users_rolesCreateManyUsers_usersTousers_roles_updated_byInput], {nullable:false})
    @Type(() => users_rolesCreateManyUsers_usersTousers_roles_updated_byInput)
    data!: Array<users_rolesCreateManyUsers_usersTousers_roles_updated_byInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
