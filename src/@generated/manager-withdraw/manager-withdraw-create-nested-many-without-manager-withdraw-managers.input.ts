import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manager_withdrawCreateWithoutManager_withdraw_managersInput } from './manager-withdraw-create-without-manager-withdraw-managers.input';
import { Type } from 'class-transformer';
import { manager_withdrawCreateOrConnectWithoutManager_withdraw_managersInput } from './manager-withdraw-create-or-connect-without-manager-withdraw-managers.input';
import { manager_withdrawCreateManyManager_withdraw_managersInputEnvelope } from './manager-withdraw-create-many-manager-withdraw-managers-input-envelope.input';
import { manager_withdrawWhereUniqueInput } from './manager-withdraw-where-unique.input';

@InputType()
export class manager_withdrawCreateNestedManyWithoutManager_withdraw_managersInput {

    @Field(() => [manager_withdrawCreateWithoutManager_withdraw_managersInput], {nullable:true})
    @Type(() => manager_withdrawCreateWithoutManager_withdraw_managersInput)
    create?: Array<manager_withdrawCreateWithoutManager_withdraw_managersInput>;

    @Field(() => [manager_withdrawCreateOrConnectWithoutManager_withdraw_managersInput], {nullable:true})
    @Type(() => manager_withdrawCreateOrConnectWithoutManager_withdraw_managersInput)
    connectOrCreate?: Array<manager_withdrawCreateOrConnectWithoutManager_withdraw_managersInput>;

    @Field(() => manager_withdrawCreateManyManager_withdraw_managersInputEnvelope, {nullable:true})
    @Type(() => manager_withdrawCreateManyManager_withdraw_managersInputEnvelope)
    createMany?: manager_withdrawCreateManyManager_withdraw_managersInputEnvelope;

    @Field(() => [manager_withdrawWhereUniqueInput], {nullable:true})
    @Type(() => manager_withdrawWhereUniqueInput)
    connect?: Array<manager_withdrawWhereUniqueInput>;
}
