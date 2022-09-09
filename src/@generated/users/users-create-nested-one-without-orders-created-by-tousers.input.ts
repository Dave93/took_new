import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutOrders_created_byTousersInput } from './users-create-without-orders-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutOrders_created_byTousersInput } from './users-create-or-connect-without-orders-created-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutOrders_created_byTousersInput {

    @Field(() => usersCreateWithoutOrders_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutOrders_created_byTousersInput)
    create?: usersCreateWithoutOrders_created_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutOrders_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutOrders_created_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutOrders_created_byTousersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}
