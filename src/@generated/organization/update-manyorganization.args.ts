import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { organizationUpdateManyMutationInput } from './organization-update-many-mutation.input';
import { Type } from 'class-transformer';
import { organizationWhereInput } from './organization-where.input';

@ArgsType()
export class UpdateManyorganizationArgs {

    @Field(() => organizationUpdateManyMutationInput, {nullable:false})
    @Type(() => organizationUpdateManyMutationInput)
    data!: organizationUpdateManyMutationInput;

    @Field(() => organizationWhereInput, {nullable:true})
    @Type(() => organizationWhereInput)
    where?: organizationWhereInput;
}
