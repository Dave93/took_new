import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutManager_withdraw_couriersInput } from './users-create-without-manager-withdraw-couriers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutManager_withdraw_couriersInput } from './users-create-or-connect-without-manager-withdraw-couriers.input';
import { usersUpsertWithoutManager_withdraw_couriersInput } from './users-upsert-without-manager-withdraw-couriers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutManager_withdraw_couriersInput } from './users-update-without-manager-withdraw-couriers.input';

@InputType()
export class usersUpdateOneRequiredWithoutManager_withdraw_couriersNestedInput {

    @Field(() => usersCreateWithoutManager_withdraw_couriersInput, {nullable:true})
    @Type(() => usersCreateWithoutManager_withdraw_couriersInput)
    create?: usersCreateWithoutManager_withdraw_couriersInput;

    @Field(() => usersCreateOrConnectWithoutManager_withdraw_couriersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutManager_withdraw_couriersInput)
    connectOrCreate?: usersCreateOrConnectWithoutManager_withdraw_couriersInput;

    @Field(() => usersUpsertWithoutManager_withdraw_couriersInput, {nullable:true})
    @Type(() => usersUpsertWithoutManager_withdraw_couriersInput)
    upsert?: usersUpsertWithoutManager_withdraw_couriersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutManager_withdraw_couriersInput, {nullable:true})
    @Type(() => usersUpdateWithoutManager_withdraw_couriersInput)
    update?: usersUpdateWithoutManager_withdraw_couriersInput;
}
