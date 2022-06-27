import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_rolesCreateManyRolesInput } from './users-roles-create-many-roles.input';
import { Type } from 'class-transformer';

@InputType()
export class users_rolesCreateManyRolesInputEnvelope {

    @Field(() => [users_rolesCreateManyRolesInput], {nullable:false})
    @Type(() => users_rolesCreateManyRolesInput)
    data!: Array<users_rolesCreateManyRolesInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
