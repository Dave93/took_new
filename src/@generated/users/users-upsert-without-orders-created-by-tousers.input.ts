import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutOrders_created_byTousersInput } from './users-update-without-orders-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutOrders_created_byTousersInput } from './users-create-without-orders-created-by-tousers.input';

@InputType()
export class usersUpsertWithoutOrders_created_byTousersInput {

    @Field(() => usersUpdateWithoutOrders_created_byTousersInput, {nullable:false})
    @Type(() => usersUpdateWithoutOrders_created_byTousersInput)
    update!: usersUpdateWithoutOrders_created_byTousersInput;

    @Field(() => usersCreateWithoutOrders_created_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutOrders_created_byTousersInput)
    create!: usersCreateWithoutOrders_created_byTousersInput;
}
