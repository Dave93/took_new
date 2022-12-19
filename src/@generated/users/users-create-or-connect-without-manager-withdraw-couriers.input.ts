import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutManager_withdraw_couriersInput } from './users-create-without-manager-withdraw-couriers.input';

@InputType()
export class usersCreateOrConnectWithoutManager_withdraw_couriersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutManager_withdraw_couriersInput, {nullable:false})
    @Type(() => usersCreateWithoutManager_withdraw_couriersInput)
    create!: usersCreateWithoutManager_withdraw_couriersInput;
}
