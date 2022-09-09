import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutOrders_updated_byTousersInput } from './users-create-without-orders-updated-by-tousers.input';

@InputType()
export class usersCreateOrConnectWithoutOrders_updated_byTousersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutOrders_updated_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutOrders_updated_byTousersInput)
    create!: usersCreateWithoutOrders_updated_byTousersInput;
}
