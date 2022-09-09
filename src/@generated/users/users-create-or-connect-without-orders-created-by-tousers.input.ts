import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutOrders_created_byTousersInput } from './users-create-without-orders-created-by-tousers.input';

@InputType()
export class usersCreateOrConnectWithoutOrders_created_byTousersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutOrders_created_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutOrders_created_byTousersInput)
    create!: usersCreateWithoutOrders_created_byTousersInput;
}
