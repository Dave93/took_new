import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manager_withdrawCreateWithoutManager_withdraw_created_byTousersInput } from './manager-withdraw-create-without-manager-withdraw-created-by-tousers.input';
import { Type } from 'class-transformer';
import { manager_withdrawCreateOrConnectWithoutManager_withdraw_created_byTousersInput } from './manager-withdraw-create-or-connect-without-manager-withdraw-created-by-tousers.input';
import { manager_withdrawCreateManyManager_withdraw_created_byTousersInputEnvelope } from './manager-withdraw-create-many-manager-withdraw-created-by-tousers-input-envelope.input';
import { manager_withdrawWhereUniqueInput } from './manager-withdraw-where-unique.input';

@InputType()
export class manager_withdrawUncheckedCreateNestedManyWithoutManager_withdraw_created_byTousersInput {

    @Field(() => [manager_withdrawCreateWithoutManager_withdraw_created_byTousersInput], {nullable:true})
    @Type(() => manager_withdrawCreateWithoutManager_withdraw_created_byTousersInput)
    create?: Array<manager_withdrawCreateWithoutManager_withdraw_created_byTousersInput>;

    @Field(() => [manager_withdrawCreateOrConnectWithoutManager_withdraw_created_byTousersInput], {nullable:true})
    @Type(() => manager_withdrawCreateOrConnectWithoutManager_withdraw_created_byTousersInput)
    connectOrCreate?: Array<manager_withdrawCreateOrConnectWithoutManager_withdraw_created_byTousersInput>;

    @Field(() => manager_withdrawCreateManyManager_withdraw_created_byTousersInputEnvelope, {nullable:true})
    @Type(() => manager_withdrawCreateManyManager_withdraw_created_byTousersInputEnvelope)
    createMany?: manager_withdrawCreateManyManager_withdraw_created_byTousersInputEnvelope;

    @Field(() => [manager_withdrawWhereUniqueInput], {nullable:true})
    @Type(() => manager_withdrawWhereUniqueInput)
    connect?: Array<manager_withdrawWhereUniqueInput>;
}
