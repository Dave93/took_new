import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutOrders_updated_byTousersInput } from './users-update-without-orders-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutOrders_updated_byTousersInput } from './users-create-without-orders-updated-by-tousers.input';

@InputType()
export class usersUpsertWithoutOrders_updated_byTousersInput {

    @Field(() => usersUpdateWithoutOrders_updated_byTousersInput, {nullable:false})
    @Type(() => usersUpdateWithoutOrders_updated_byTousersInput)
    update!: usersUpdateWithoutOrders_updated_byTousersInput;

    @Field(() => usersCreateWithoutOrders_updated_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutOrders_updated_byTousersInput)
    create!: usersCreateWithoutOrders_updated_byTousersInput;
}
