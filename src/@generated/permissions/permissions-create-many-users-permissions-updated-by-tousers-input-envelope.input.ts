import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { permissionsCreateManyUsers_permissions_updated_byTousersInput } from './permissions-create-many-users-permissions-updated-by-tousers.input';
import { Type } from 'class-transformer';

@InputType()
export class permissionsCreateManyUsers_permissions_updated_byTousersInputEnvelope {

    @Field(() => [permissionsCreateManyUsers_permissions_updated_byTousersInput], {nullable:false})
    @Type(() => permissionsCreateManyUsers_permissions_updated_byTousersInput)
    data!: Array<permissionsCreateManyUsers_permissions_updated_byTousersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
