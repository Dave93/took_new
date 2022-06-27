import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { permissionsScalarWhereInput } from './permissions-scalar-where.input';
import { Type } from 'class-transformer';
import { permissionsUpdateManyMutationInput } from './permissions-update-many-mutation.input';

@InputType()
export class permissionsUpdateManyWithWhereWithoutUsers_permissions_created_byTousersInput {

    @Field(() => permissionsScalarWhereInput, {nullable:false})
    @Type(() => permissionsScalarWhereInput)
    where!: permissionsScalarWhereInput;

    @Field(() => permissionsUpdateManyMutationInput, {nullable:false})
    @Type(() => permissionsUpdateManyMutationInput)
    data!: permissionsUpdateManyMutationInput;
}
