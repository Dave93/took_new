import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manager_withdrawCreateWithoutManager_withdraw_organizationsInput } from './manager-withdraw-create-without-manager-withdraw-organizations.input';
import { Type } from 'class-transformer';
import { manager_withdrawCreateOrConnectWithoutManager_withdraw_organizationsInput } from './manager-withdraw-create-or-connect-without-manager-withdraw-organizations.input';
import { manager_withdrawCreateManyManager_withdraw_organizationsInputEnvelope } from './manager-withdraw-create-many-manager-withdraw-organizations-input-envelope.input';
import { manager_withdrawWhereUniqueInput } from './manager-withdraw-where-unique.input';

@InputType()
export class manager_withdrawCreateNestedManyWithoutManager_withdraw_organizationsInput {

    @Field(() => [manager_withdrawCreateWithoutManager_withdraw_organizationsInput], {nullable:true})
    @Type(() => manager_withdrawCreateWithoutManager_withdraw_organizationsInput)
    create?: Array<manager_withdrawCreateWithoutManager_withdraw_organizationsInput>;

    @Field(() => [manager_withdrawCreateOrConnectWithoutManager_withdraw_organizationsInput], {nullable:true})
    @Type(() => manager_withdrawCreateOrConnectWithoutManager_withdraw_organizationsInput)
    connectOrCreate?: Array<manager_withdrawCreateOrConnectWithoutManager_withdraw_organizationsInput>;

    @Field(() => manager_withdrawCreateManyManager_withdraw_organizationsInputEnvelope, {nullable:true})
    @Type(() => manager_withdrawCreateManyManager_withdraw_organizationsInputEnvelope)
    createMany?: manager_withdrawCreateManyManager_withdraw_organizationsInputEnvelope;

    @Field(() => [manager_withdrawWhereUniqueInput], {nullable:true})
    @Type(() => manager_withdrawWhereUniqueInput)
    connect?: Array<manager_withdrawWhereUniqueInput>;
}
