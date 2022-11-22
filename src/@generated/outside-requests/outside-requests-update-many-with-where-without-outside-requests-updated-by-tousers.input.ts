import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { outside_requestsScalarWhereInput } from './outside-requests-scalar-where.input';
import { Type } from 'class-transformer';
import { outside_requestsUpdateManyMutationInput } from './outside-requests-update-many-mutation.input';

@InputType()
export class outside_requestsUpdateManyWithWhereWithoutOutside_requests_updated_byTousersInput {

    @Field(() => outside_requestsScalarWhereInput, {nullable:false})
    @Type(() => outside_requestsScalarWhereInput)
    where!: outside_requestsScalarWhereInput;

    @Field(() => outside_requestsUpdateManyMutationInput, {nullable:false})
    @Type(() => outside_requestsUpdateManyMutationInput)
    data!: outside_requestsUpdateManyMutationInput;
}
