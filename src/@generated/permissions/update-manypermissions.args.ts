import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { permissionsUpdateManyMutationInput } from './permissions-update-many-mutation.input';
import { Type } from 'class-transformer';
import { permissionsWhereInput } from './permissions-where.input';

@ArgsType()
export class UpdateManypermissionsArgs {

    @Field(() => permissionsUpdateManyMutationInput, {nullable:false})
    @Type(() => permissionsUpdateManyMutationInput)
    data!: permissionsUpdateManyMutationInput;

    @Field(() => permissionsWhereInput, {nullable:true})
    @Type(() => permissionsWhereInput)
    where?: permissionsWhereInput;
}
