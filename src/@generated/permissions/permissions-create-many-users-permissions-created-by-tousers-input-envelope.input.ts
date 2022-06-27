import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { permissionsCreateManyUsers_permissions_created_byTousersInput } from './permissions-create-many-users-permissions-created-by-tousers.input';
import { Type } from 'class-transformer';

@InputType()
export class permissionsCreateManyUsers_permissions_created_byTousersInputEnvelope {

    @Field(() => [permissionsCreateManyUsers_permissions_created_byTousersInput], {nullable:false})
    @Type(() => permissionsCreateManyUsers_permissions_created_byTousersInput)
    data!: Array<permissionsCreateManyUsers_permissions_created_byTousersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
