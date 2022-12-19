import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manager_withdrawCreateWithoutManager_withdraw_managersInput } from './manager-withdraw-create-without-manager-withdraw-managers.input';
import { Type } from 'class-transformer';
import { manager_withdrawCreateOrConnectWithoutManager_withdraw_managersInput } from './manager-withdraw-create-or-connect-without-manager-withdraw-managers.input';
import { manager_withdrawUpsertWithWhereUniqueWithoutManager_withdraw_managersInput } from './manager-withdraw-upsert-with-where-unique-without-manager-withdraw-managers.input';
import { manager_withdrawCreateManyManager_withdraw_managersInputEnvelope } from './manager-withdraw-create-many-manager-withdraw-managers-input-envelope.input';
import { manager_withdrawWhereUniqueInput } from './manager-withdraw-where-unique.input';
import { manager_withdrawUpdateWithWhereUniqueWithoutManager_withdraw_managersInput } from './manager-withdraw-update-with-where-unique-without-manager-withdraw-managers.input';
import { manager_withdrawUpdateManyWithWhereWithoutManager_withdraw_managersInput } from './manager-withdraw-update-many-with-where-without-manager-withdraw-managers.input';
import { manager_withdrawScalarWhereInput } from './manager-withdraw-scalar-where.input';

@InputType()
export class manager_withdrawUncheckedUpdateManyWithoutManager_withdraw_managersNestedInput {

    @Field(() => [manager_withdrawCreateWithoutManager_withdraw_managersInput], {nullable:true})
    @Type(() => manager_withdrawCreateWithoutManager_withdraw_managersInput)
    create?: Array<manager_withdrawCreateWithoutManager_withdraw_managersInput>;

    @Field(() => [manager_withdrawCreateOrConnectWithoutManager_withdraw_managersInput], {nullable:true})
    @Type(() => manager_withdrawCreateOrConnectWithoutManager_withdraw_managersInput)
    connectOrCreate?: Array<manager_withdrawCreateOrConnectWithoutManager_withdraw_managersInput>;

    @Field(() => [manager_withdrawUpsertWithWhereUniqueWithoutManager_withdraw_managersInput], {nullable:true})
    @Type(() => manager_withdrawUpsertWithWhereUniqueWithoutManager_withdraw_managersInput)
    upsert?: Array<manager_withdrawUpsertWithWhereUniqueWithoutManager_withdraw_managersInput>;

    @Field(() => manager_withdrawCreateManyManager_withdraw_managersInputEnvelope, {nullable:true})
    @Type(() => manager_withdrawCreateManyManager_withdraw_managersInputEnvelope)
    createMany?: manager_withdrawCreateManyManager_withdraw_managersInputEnvelope;

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

    @Field(() => [manager_withdrawUpdateWithWhereUniqueWithoutManager_withdraw_managersInput], {nullable:true})
    @Type(() => manager_withdrawUpdateWithWhereUniqueWithoutManager_withdraw_managersInput)
    update?: Array<manager_withdrawUpdateWithWhereUniqueWithoutManager_withdraw_managersInput>;

    @Field(() => [manager_withdrawUpdateManyWithWhereWithoutManager_withdraw_managersInput], {nullable:true})
    @Type(() => manager_withdrawUpdateManyWithWhereWithoutManager_withdraw_managersInput)
    updateMany?: Array<manager_withdrawUpdateManyWithWhereWithoutManager_withdraw_managersInput>;

    @Field(() => [manager_withdrawScalarWhereInput], {nullable:true})
    @Type(() => manager_withdrawScalarWhereInput)
    deleteMany?: Array<manager_withdrawScalarWhereInput>;
}
