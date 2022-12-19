import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manager_withdrawCreateWithoutManager_withdraw_created_byTousersInput } from './manager-withdraw-create-without-manager-withdraw-created-by-tousers.input';
import { Type } from 'class-transformer';
import { manager_withdrawCreateOrConnectWithoutManager_withdraw_created_byTousersInput } from './manager-withdraw-create-or-connect-without-manager-withdraw-created-by-tousers.input';
import { manager_withdrawUpsertWithWhereUniqueWithoutManager_withdraw_created_byTousersInput } from './manager-withdraw-upsert-with-where-unique-without-manager-withdraw-created-by-tousers.input';
import { manager_withdrawCreateManyManager_withdraw_created_byTousersInputEnvelope } from './manager-withdraw-create-many-manager-withdraw-created-by-tousers-input-envelope.input';
import { manager_withdrawWhereUniqueInput } from './manager-withdraw-where-unique.input';
import { manager_withdrawUpdateWithWhereUniqueWithoutManager_withdraw_created_byTousersInput } from './manager-withdraw-update-with-where-unique-without-manager-withdraw-created-by-tousers.input';
import { manager_withdrawUpdateManyWithWhereWithoutManager_withdraw_created_byTousersInput } from './manager-withdraw-update-many-with-where-without-manager-withdraw-created-by-tousers.input';
import { manager_withdrawScalarWhereInput } from './manager-withdraw-scalar-where.input';

@InputType()
export class manager_withdrawUncheckedUpdateManyWithoutManager_withdraw_created_byTousersNestedInput {

    @Field(() => [manager_withdrawCreateWithoutManager_withdraw_created_byTousersInput], {nullable:true})
    @Type(() => manager_withdrawCreateWithoutManager_withdraw_created_byTousersInput)
    create?: Array<manager_withdrawCreateWithoutManager_withdraw_created_byTousersInput>;

    @Field(() => [manager_withdrawCreateOrConnectWithoutManager_withdraw_created_byTousersInput], {nullable:true})
    @Type(() => manager_withdrawCreateOrConnectWithoutManager_withdraw_created_byTousersInput)
    connectOrCreate?: Array<manager_withdrawCreateOrConnectWithoutManager_withdraw_created_byTousersInput>;

    @Field(() => [manager_withdrawUpsertWithWhereUniqueWithoutManager_withdraw_created_byTousersInput], {nullable:true})
    @Type(() => manager_withdrawUpsertWithWhereUniqueWithoutManager_withdraw_created_byTousersInput)
    upsert?: Array<manager_withdrawUpsertWithWhereUniqueWithoutManager_withdraw_created_byTousersInput>;

    @Field(() => manager_withdrawCreateManyManager_withdraw_created_byTousersInputEnvelope, {nullable:true})
    @Type(() => manager_withdrawCreateManyManager_withdraw_created_byTousersInputEnvelope)
    createMany?: manager_withdrawCreateManyManager_withdraw_created_byTousersInputEnvelope;

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

    @Field(() => [manager_withdrawUpdateWithWhereUniqueWithoutManager_withdraw_created_byTousersInput], {nullable:true})
    @Type(() => manager_withdrawUpdateWithWhereUniqueWithoutManager_withdraw_created_byTousersInput)
    update?: Array<manager_withdrawUpdateWithWhereUniqueWithoutManager_withdraw_created_byTousersInput>;

    @Field(() => [manager_withdrawUpdateManyWithWhereWithoutManager_withdraw_created_byTousersInput], {nullable:true})
    @Type(() => manager_withdrawUpdateManyWithWhereWithoutManager_withdraw_created_byTousersInput)
    updateMany?: Array<manager_withdrawUpdateManyWithWhereWithoutManager_withdraw_created_byTousersInput>;

    @Field(() => [manager_withdrawScalarWhereInput], {nullable:true})
    @Type(() => manager_withdrawScalarWhereInput)
    deleteMany?: Array<manager_withdrawScalarWhereInput>;
}
