import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutOrders_created_byTousersInput } from './users-create-without-orders-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutOrders_created_byTousersInput } from './users-create-or-connect-without-orders-created-by-tousers.input';
import { usersUpsertWithoutOrders_created_byTousersInput } from './users-upsert-without-orders-created-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutOrders_created_byTousersInput } from './users-update-without-orders-created-by-tousers.input';

@InputType()
export class usersUpdateOneWithoutOrders_created_byTousersNestedInput {

    @Field(() => usersCreateWithoutOrders_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutOrders_created_byTousersInput)
    create?: usersCreateWithoutOrders_created_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutOrders_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutOrders_created_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutOrders_created_byTousersInput;

    @Field(() => usersUpsertWithoutOrders_created_byTousersInput, {nullable:true})
    @Type(() => usersUpsertWithoutOrders_created_byTousersInput)
    upsert?: usersUpsertWithoutOrders_created_byTousersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutOrders_created_byTousersInput, {nullable:true})
    @Type(() => usersUpdateWithoutOrders_created_byTousersInput)
    update?: usersUpdateWithoutOrders_created_byTousersInput;
}
