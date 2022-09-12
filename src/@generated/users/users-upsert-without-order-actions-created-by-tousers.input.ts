import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutOrder_actions_created_byTousersInput } from './users-update-without-order-actions-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutOrder_actions_created_byTousersInput } from './users-create-without-order-actions-created-by-tousers.input';

@InputType()
export class usersUpsertWithoutOrder_actions_created_byTousersInput {

    @Field(() => usersUpdateWithoutOrder_actions_created_byTousersInput, {nullable:false})
    @Type(() => usersUpdateWithoutOrder_actions_created_byTousersInput)
    update!: usersUpdateWithoutOrder_actions_created_byTousersInput;

    @Field(() => usersCreateWithoutOrder_actions_created_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutOrder_actions_created_byTousersInput)
    create!: usersCreateWithoutOrder_actions_created_byTousersInput;
}
