import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { rolesUpdateManyMutationInput } from './roles-update-many-mutation.input';
import { Type } from 'class-transformer';
import { rolesWhereInput } from './roles-where.input';

@ArgsType()
export class UpdateManyrolesArgs {

    @Field(() => rolesUpdateManyMutationInput, {nullable:false})
    @Type(() => rolesUpdateManyMutationInput)
    data!: rolesUpdateManyMutationInput;

    @Field(() => rolesWhereInput, {nullable:true})
    @Type(() => rolesWhereInput)
    where?: rolesWhereInput;
}
