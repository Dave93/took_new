import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutOrders_updated_byTousersInput } from './users-create-without-orders-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutOrders_updated_byTousersInput } from './users-create-or-connect-without-orders-updated-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutOrders_updated_byTousersInput {

    @Field(() => usersCreateWithoutOrders_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutOrders_updated_byTousersInput)
    create?: usersCreateWithoutOrders_updated_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutOrders_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutOrders_updated_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutOrders_updated_byTousersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}
