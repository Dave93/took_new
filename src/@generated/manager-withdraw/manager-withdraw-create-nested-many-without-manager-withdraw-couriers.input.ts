import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manager_withdrawCreateWithoutManager_withdraw_couriersInput } from './manager-withdraw-create-without-manager-withdraw-couriers.input';
import { Type } from 'class-transformer';
import { manager_withdrawCreateOrConnectWithoutManager_withdraw_couriersInput } from './manager-withdraw-create-or-connect-without-manager-withdraw-couriers.input';
import { manager_withdrawCreateManyManager_withdraw_couriersInputEnvelope } from './manager-withdraw-create-many-manager-withdraw-couriers-input-envelope.input';
import { manager_withdrawWhereUniqueInput } from './manager-withdraw-where-unique.input';

@InputType()
export class manager_withdrawCreateNestedManyWithoutManager_withdraw_couriersInput {

    @Field(() => [manager_withdrawCreateWithoutManager_withdraw_couriersInput], {nullable:true})
    @Type(() => manager_withdrawCreateWithoutManager_withdraw_couriersInput)
    create?: Array<manager_withdrawCreateWithoutManager_withdraw_couriersInput>;

    @Field(() => [manager_withdrawCreateOrConnectWithoutManager_withdraw_couriersInput], {nullable:true})
    @Type(() => manager_withdrawCreateOrConnectWithoutManager_withdraw_couriersInput)
    connectOrCreate?: Array<manager_withdrawCreateOrConnectWithoutManager_withdraw_couriersInput>;

    @Field(() => manager_withdrawCreateManyManager_withdraw_couriersInputEnvelope, {nullable:true})
    @Type(() => manager_withdrawCreateManyManager_withdraw_couriersInputEnvelope)
    createMany?: manager_withdrawCreateManyManager_withdraw_couriersInputEnvelope;

    @Field(() => [manager_withdrawWhereUniqueInput], {nullable:true})
    @Type(() => manager_withdrawWhereUniqueInput)
    connect?: Array<manager_withdrawWhereUniqueInput>;
}
