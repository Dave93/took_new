import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { rolesScalarWhereInput } from './roles-scalar-where.input';
import { Type } from 'class-transformer';
import { rolesUpdateManyMutationInput } from './roles-update-many-mutation.input';

@InputType()
export class rolesUpdateManyWithWhereWithoutUsers_roles_created_byTousersInput {

    @Field(() => rolesScalarWhereInput, {nullable:false})
    @Type(() => rolesScalarWhereInput)
    where!: rolesScalarWhereInput;

    @Field(() => rolesUpdateManyMutationInput, {nullable:false})
    @Type(() => rolesUpdateManyMutationInput)
    data!: rolesUpdateManyMutationInput;
}
