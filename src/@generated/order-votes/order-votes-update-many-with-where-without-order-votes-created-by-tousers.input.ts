import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_votesScalarWhereInput } from './order-votes-scalar-where.input';
import { Type } from 'class-transformer';
import { order_votesUpdateManyMutationInput } from './order-votes-update-many-mutation.input';

@InputType()
export class order_votesUpdateManyWithWhereWithoutOrder_votes_created_byTousersInput {

    @Field(() => order_votesScalarWhereInput, {nullable:false})
    @Type(() => order_votesScalarWhereInput)
    where!: order_votesScalarWhereInput;

    @Field(() => order_votesUpdateManyMutationInput, {nullable:false})
    @Type(() => order_votesUpdateManyMutationInput)
    data!: order_votesUpdateManyMutationInput;
}
