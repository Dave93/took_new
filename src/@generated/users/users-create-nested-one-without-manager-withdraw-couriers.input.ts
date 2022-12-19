import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutManager_withdraw_couriersInput } from './users-create-without-manager-withdraw-couriers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutManager_withdraw_couriersInput } from './users-create-or-connect-without-manager-withdraw-couriers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutManager_withdraw_couriersInput {

    @Field(() => usersCreateWithoutManager_withdraw_couriersInput, {nullable:true})
    @Type(() => usersCreateWithoutManager_withdraw_couriersInput)
    create?: usersCreateWithoutManager_withdraw_couriersInput;

    @Field(() => usersCreateOrConnectWithoutManager_withdraw_couriersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutManager_withdraw_couriersInput)
    connectOrCreate?: usersCreateOrConnectWithoutManager_withdraw_couriersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}
