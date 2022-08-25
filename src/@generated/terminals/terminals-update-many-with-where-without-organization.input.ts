import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsScalarWhereInput } from './terminals-scalar-where.input';
import { Type } from 'class-transformer';
import { terminalsUpdateManyMutationInput } from './terminals-update-many-mutation.input';

@InputType()
export class terminalsUpdateManyWithWhereWithoutOrganizationInput {

    @Field(() => terminalsScalarWhereInput, {nullable:false})
    @Type(() => terminalsScalarWhereInput)
    where!: terminalsScalarWhereInput;

    @Field(() => terminalsUpdateManyMutationInput, {nullable:false})
    @Type(() => terminalsUpdateManyMutationInput)
    data!: terminalsUpdateManyMutationInput;
}
