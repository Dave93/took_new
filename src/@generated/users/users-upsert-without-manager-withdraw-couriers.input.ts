import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutManager_withdraw_couriersInput } from './users-update-without-manager-withdraw-couriers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutManager_withdraw_couriersInput } from './users-create-without-manager-withdraw-couriers.input';

@InputType()
export class usersUpsertWithoutManager_withdraw_couriersInput {

    @Field(() => usersUpdateWithoutManager_withdraw_couriersInput, {nullable:false})
    @Type(() => usersUpdateWithoutManager_withdraw_couriersInput)
    update!: usersUpdateWithoutManager_withdraw_couriersInput;

    @Field(() => usersCreateWithoutManager_withdraw_couriersInput, {nullable:false})
    @Type(() => usersCreateWithoutManager_withdraw_couriersInput)
    create!: usersCreateWithoutManager_withdraw_couriersInput;
}
