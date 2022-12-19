import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manager_withdrawCreateWithoutManager_withdraw_terminalsInput } from './manager-withdraw-create-without-manager-withdraw-terminals.input';
import { Type } from 'class-transformer';
import { manager_withdrawCreateOrConnectWithoutManager_withdraw_terminalsInput } from './manager-withdraw-create-or-connect-without-manager-withdraw-terminals.input';
import { manager_withdrawCreateManyManager_withdraw_terminalsInputEnvelope } from './manager-withdraw-create-many-manager-withdraw-terminals-input-envelope.input';
import { manager_withdrawWhereUniqueInput } from './manager-withdraw-where-unique.input';

@InputType()
export class manager_withdrawCreateNestedManyWithoutManager_withdraw_terminalsInput {

    @Field(() => [manager_withdrawCreateWithoutManager_withdraw_terminalsInput], {nullable:true})
    @Type(() => manager_withdrawCreateWithoutManager_withdraw_terminalsInput)
    create?: Array<manager_withdrawCreateWithoutManager_withdraw_terminalsInput>;

    @Field(() => [manager_withdrawCreateOrConnectWithoutManager_withdraw_terminalsInput], {nullable:true})
    @Type(() => manager_withdrawCreateOrConnectWithoutManager_withdraw_terminalsInput)
    connectOrCreate?: Array<manager_withdrawCreateOrConnectWithoutManager_withdraw_terminalsInput>;

    @Field(() => manager_withdrawCreateManyManager_withdraw_terminalsInputEnvelope, {nullable:true})
    @Type(() => manager_withdrawCreateManyManager_withdraw_terminalsInputEnvelope)
    createMany?: manager_withdrawCreateManyManager_withdraw_terminalsInputEnvelope;

    @Field(() => [manager_withdrawWhereUniqueInput], {nullable:true})
    @Type(() => manager_withdrawWhereUniqueInput)
    connect?: Array<manager_withdrawWhereUniqueInput>;
}
