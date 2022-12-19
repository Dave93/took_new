import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manager_withdrawCreateWithoutManager_withdraw_couriersInput } from './manager-withdraw-create-without-manager-withdraw-couriers.input';
import { Type } from 'class-transformer';
import { manager_withdrawCreateOrConnectWithoutManager_withdraw_couriersInput } from './manager-withdraw-create-or-connect-without-manager-withdraw-couriers.input';
import { manager_withdrawUpsertWithWhereUniqueWithoutManager_withdraw_couriersInput } from './manager-withdraw-upsert-with-where-unique-without-manager-withdraw-couriers.input';
import { manager_withdrawCreateManyManager_withdraw_couriersInputEnvelope } from './manager-withdraw-create-many-manager-withdraw-couriers-input-envelope.input';
import { manager_withdrawWhereUniqueInput } from './manager-withdraw-where-unique.input';
import { manager_withdrawUpdateWithWhereUniqueWithoutManager_withdraw_couriersInput } from './manager-withdraw-update-with-where-unique-without-manager-withdraw-couriers.input';
import { manager_withdrawUpdateManyWithWhereWithoutManager_withdraw_couriersInput } from './manager-withdraw-update-many-with-where-without-manager-withdraw-couriers.input';
import { manager_withdrawScalarWhereInput } from './manager-withdraw-scalar-where.input';

@InputType()
export class manager_withdrawUncheckedUpdateManyWithoutManager_withdraw_couriersNestedInput {

    @Field(() => [manager_withdrawCreateWithoutManager_withdraw_couriersInput], {nullable:true})
    @Type(() => manager_withdrawCreateWithoutManager_withdraw_couriersInput)
    create?: Array<manager_withdrawCreateWithoutManager_withdraw_couriersInput>;

    @Field(() => [manager_withdrawCreateOrConnectWithoutManager_withdraw_couriersInput], {nullable:true})
    @Type(() => manager_withdrawCreateOrConnectWithoutManager_withdraw_couriersInput)
    connectOrCreate?: Array<manager_withdrawCreateOrConnectWithoutManager_withdraw_couriersInput>;

    @Field(() => [manager_withdrawUpsertWithWhereUniqueWithoutManager_withdraw_couriersInput], {nullable:true})
    @Type(() => manager_withdrawUpsertWithWhereUniqueWithoutManager_withdraw_couriersInput)
    upsert?: Array<manager_withdrawUpsertWithWhereUniqueWithoutManager_withdraw_couriersInput>;

    @Field(() => manager_withdrawCreateManyManager_withdraw_couriersInputEnvelope, {nullable:true})
    @Type(() => manager_withdrawCreateManyManager_withdraw_couriersInputEnvelope)
    createMany?: manager_withdrawCreateManyManager_withdraw_couriersInputEnvelope;

    @Field(() => [manager_withdrawWhereUniqueInput], {nullable:true})
    @Type(() => manager_withdrawWhereUniqueInput)
    set?: Array<manager_withdrawWhereUniqueInput>;

    @Field(() => [manager_withdrawWhereUniqueInput], {nullable:true})
    @Type(() => manager_withdrawWhereUniqueInput)
    disconnect?: Array<manager_withdrawWhereUniqueInput>;

    @Field(() => [manager_withdrawWhereUniqueInput], {nullable:true})
    @Type(() => manager_withdrawWhereUniqueInput)
    delete?: Array<manager_withdrawWhereUniqueInput>;

    @Field(() => [manager_withdrawWhereUniqueInput], {nullable:true})
    @Type(() => manager_withdrawWhereUniqueInput)
    connect?: Array<manager_withdrawWhereUniqueInput>;

    @Field(() => [manager_withdrawUpdateWithWhereUniqueWithoutManager_withdraw_couriersInput], {nullable:true})
    @Type(() => manager_withdrawUpdateWithWhereUniqueWithoutManager_withdraw_couriersInput)
    update?: Array<manager_withdrawUpdateWithWhereUniqueWithoutManager_withdraw_couriersInput>;

    @Field(() => [manager_withdrawUpdateManyWithWhereWithoutManager_withdraw_couriersInput], {nullable:true})
    @Type(() => manager_withdrawUpdateManyWithWhereWithoutManager_withdraw_couriersInput)
    updateMany?: Array<manager_withdrawUpdateManyWithWhereWithoutManager_withdraw_couriersInput>;

    @Field(() => [manager_withdrawScalarWhereInput], {nullable:true})
    @Type(() => manager_withdrawScalarWhereInput)
    deleteMany?: Array<manager_withdrawScalarWhereInput>;
}
