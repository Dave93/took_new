import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manager_withdrawWhereUniqueInput } from './manager-withdraw-where-unique.input';
import { Type } from 'class-transformer';
import { manager_withdrawUpdateWithoutManager_withdraw_couriersInput } from './manager-withdraw-update-without-manager-withdraw-couriers.input';
import { manager_withdrawCreateWithoutManager_withdraw_couriersInput } from './manager-withdraw-create-without-manager-withdraw-couriers.input';

@InputType()
export class manager_withdrawUpsertWithWhereUniqueWithoutManager_withdraw_couriersInput {

    @Field(() => manager_withdrawWhereUniqueInput, {nullable:false})
    @Type(() => manager_withdrawWhereUniqueInput)
    where!: manager_withdrawWhereUniqueInput;

    @Field(() => manager_withdrawUpdateWithoutManager_withdraw_couriersInput, {nullable:false})
    @Type(() => manager_withdrawUpdateWithoutManager_withdraw_couriersInput)
    update!: manager_withdrawUpdateWithoutManager_withdraw_couriersInput;

    @Field(() => manager_withdrawCreateWithoutManager_withdraw_couriersInput, {nullable:false})
    @Type(() => manager_withdrawCreateWithoutManager_withdraw_couriersInput)
    create!: manager_withdrawCreateWithoutManager_withdraw_couriersInput;
}
