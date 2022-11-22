import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutOrder_votes_created_byTousersInput } from './users-create-without-order-votes-created-by-tousers.input';

@InputType()
export class usersCreateOrConnectWithoutOrder_votes_created_byTousersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutOrder_votes_created_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutOrder_votes_created_byTousersInput)
    create!: usersCreateWithoutOrder_votes_created_byTousersInput;
}
