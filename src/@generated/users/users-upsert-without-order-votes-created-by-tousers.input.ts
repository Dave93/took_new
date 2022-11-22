import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutOrder_votes_created_byTousersInput } from './users-update-without-order-votes-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutOrder_votes_created_byTousersInput } from './users-create-without-order-votes-created-by-tousers.input';

@InputType()
export class usersUpsertWithoutOrder_votes_created_byTousersInput {

    @Field(() => usersUpdateWithoutOrder_votes_created_byTousersInput, {nullable:false})
    @Type(() => usersUpdateWithoutOrder_votes_created_byTousersInput)
    update!: usersUpdateWithoutOrder_votes_created_byTousersInput;

    @Field(() => usersCreateWithoutOrder_votes_created_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutOrder_votes_created_byTousersInput)
    create!: usersCreateWithoutOrder_votes_created_byTousersInput;
}
