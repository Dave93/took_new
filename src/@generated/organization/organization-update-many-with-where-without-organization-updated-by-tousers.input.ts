import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationScalarWhereInput } from './organization-scalar-where.input';
import { Type } from 'class-transformer';
import { organizationUpdateManyMutationInput } from './organization-update-many-mutation.input';

@InputType()
export class organizationUpdateManyWithWhereWithoutOrganization_updated_byTousersInput {

    @Field(() => organizationScalarWhereInput, {nullable:false})
    @Type(() => organizationScalarWhereInput)
    where!: organizationScalarWhereInput;

    @Field(() => organizationUpdateManyMutationInput, {nullable:false})
    @Type(() => organizationUpdateManyMutationInput)
    data!: organizationUpdateManyMutationInput;
}
