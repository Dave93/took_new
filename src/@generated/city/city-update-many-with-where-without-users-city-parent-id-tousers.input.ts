import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cityScalarWhereInput } from './city-scalar-where.input';
import { Type } from 'class-transformer';
import { cityUpdateManyMutationInput } from './city-update-many-mutation.input';

@InputType()
export class cityUpdateManyWithWhereWithoutUsers_city_parent_idTousersInput {

    @Field(() => cityScalarWhereInput, {nullable:false})
    @Type(() => cityScalarWhereInput)
    where!: cityScalarWhereInput;

    @Field(() => cityUpdateManyMutationInput, {nullable:false})
    @Type(() => cityUpdateManyMutationInput)
    data!: cityUpdateManyMutationInput;
}
