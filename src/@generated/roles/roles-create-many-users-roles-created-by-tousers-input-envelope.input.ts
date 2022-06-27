import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { rolesCreateManyUsers_roles_created_byTousersInput } from './roles-create-many-users-roles-created-by-tousers.input';
import { Type } from 'class-transformer';

@InputType()
export class rolesCreateManyUsers_roles_created_byTousersInputEnvelope {

    @Field(() => [rolesCreateManyUsers_roles_created_byTousersInput], {nullable:false})
    @Type(() => rolesCreateManyUsers_roles_created_byTousersInput)
    data!: Array<rolesCreateManyUsers_roles_created_byTousersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
