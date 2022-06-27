import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { rolesCreateManyUsers_roles_updated_byTousersInput } from './roles-create-many-users-roles-updated-by-tousers.input';
import { Type } from 'class-transformer';

@InputType()
export class rolesCreateManyUsers_roles_updated_byTousersInputEnvelope {

    @Field(() => [rolesCreateManyUsers_roles_updated_byTousersInput], {nullable:false})
    @Type(() => rolesCreateManyUsers_roles_updated_byTousersInput)
    data!: Array<rolesCreateManyUsers_roles_updated_byTousersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
