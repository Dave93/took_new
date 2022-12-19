import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manager_withdrawCreateWithoutManager_withdraw_organizationsInput } from './manager-withdraw-create-without-manager-withdraw-organizations.input';
import { Type } from 'class-transformer';
import { manager_withdrawCreateOrConnectWithoutManager_withdraw_organizationsInput } from './manager-withdraw-create-or-connect-without-manager-withdraw-organizations.input';
import { manager_withdrawUpsertWithWhereUniqueWithoutManager_withdraw_organizationsInput } from './manager-withdraw-upsert-with-where-unique-without-manager-withdraw-organizations.input';
import { manager_withdrawCreateManyManager_withdraw_organizationsInputEnvelope } from './manager-withdraw-create-many-manager-withdraw-organizations-input-envelope.input';
import { manager_withdrawWhereUniqueInput } from './manager-withdraw-where-unique.input';
import { manager_withdrawUpdateWithWhereUniqueWithoutManager_withdraw_organizationsInput } from './manager-withdraw-update-with-where-unique-without-manager-withdraw-organizations.input';
import { manager_withdrawUpdateManyWithWhereWithoutManager_withdraw_organizationsInput } from './manager-withdraw-update-many-with-where-without-manager-withdraw-organizations.input';
import { manager_withdrawScalarWhereInput } from './manager-withdraw-scalar-where.input';

@InputType()
export class manager_withdrawUpdateManyWithoutManager_withdraw_organizationsNestedInput {

    @Field(() => [manager_withdrawCreateWithoutManager_withdraw_organizationsInput], {nullable:true})
    @Type(() => manager_withdrawCreateWithoutManager_withdraw_organizationsInput)
    create?: Array<manager_withdrawCreateWithoutManager_withdraw_organizationsInput>;

    @Field(() => [manager_withdrawCreateOrConnectWithoutManager_withdraw_organizationsInput], {nullable:true})
    @Type(() => manager_withdrawCreateOrConnectWithoutManager_withdraw_organizationsInput)
    connectOrCreate?: Array<manager_withdrawCreateOrConnectWithoutManager_withdraw_organizationsInput>;

    @Field(() => [manager_withdrawUpsertWithWhereUniqueWithoutManager_withdraw_organizationsInput], {nullable:true})
    @Type(() => manager_withdrawUpsertWithWhereUniqueWithoutManager_withdraw_organizationsInput)
    upsert?: Array<manager_withdrawUpsertWithWhereUniqueWithoutManager_withdraw_organizationsInput>;

    @Field(() => manager_withdrawCreateManyManager_withdraw_organizationsInputEnvelope, {nullable:true})
    @Type(() => manager_withdrawCreateManyManager_withdraw_organizationsInputEnvelope)
    createMany?: manager_withdrawCreateManyManager_withdraw_organizationsInputEnvelope;

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

    @Field(() => [manager_withdrawUpdateWithWhereUniqueWithoutManager_withdraw_organizationsInput], {nullable:true})
    @Type(() => manager_withdrawUpdateWithWhereUniqueWithoutManager_withdraw_organizationsInput)
    update?: Array<manager_withdrawUpdateWithWhereUniqueWithoutManager_withdraw_organizationsInput>;

    @Field(() => [manager_withdrawUpdateManyWithWhereWithoutManager_withdraw_organizationsInput], {nullable:true})
    @Type(() => manager_withdrawUpdateManyWithWhereWithoutManager_withdraw_organizationsInput)
    updateMany?: Array<manager_withdrawUpdateManyWithWhereWithoutManager_withdraw_organizationsInput>;

    @Field(() => [manager_withdrawScalarWhereInput], {nullable:true})
    @Type(() => manager_withdrawScalarWhereInput)
    deleteMany?: Array<manager_withdrawScalarWhereInput>;
}
