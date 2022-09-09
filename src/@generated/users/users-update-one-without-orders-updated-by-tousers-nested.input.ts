import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutOrders_updated_byTousersInput } from './users-create-without-orders-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutOrders_updated_byTousersInput } from './users-create-or-connect-without-orders-updated-by-tousers.input';
import { usersUpsertWithoutOrders_updated_byTousersInput } from './users-upsert-without-orders-updated-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutOrders_updated_byTousersInput } from './users-update-without-orders-updated-by-tousers.input';

@InputType()
export class usersUpdateOneWithoutOrders_updated_byTousersNestedInput {

    @Field(() => usersCreateWithoutOrders_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutOrders_updated_byTousersInput)
    create?: usersCreateWithoutOrders_updated_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutOrders_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutOrders_updated_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutOrders_updated_byTousersInput;

    @Field(() => usersUpsertWithoutOrders_updated_byTousersInput, {nullable:true})
    @Type(() => usersUpsertWithoutOrders_updated_byTousersInput)
    upsert?: usersUpsertWithoutOrders_updated_byTousersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutOrders_updated_byTousersInput, {nullable:true})
    @Type(() => usersUpdateWithoutOrders_updated_byTousersInput)
    update?: usersUpdateWithoutOrders_updated_byTousersInput;
}
