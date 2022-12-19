import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutManager_withdraw_managersInput } from './users-create-without-manager-withdraw-managers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutManager_withdraw_managersInput } from './users-create-or-connect-without-manager-withdraw-managers.input';
import { usersUpsertWithoutManager_withdraw_managersInput } from './users-upsert-without-manager-withdraw-managers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutManager_withdraw_managersInput } from './users-update-without-manager-withdraw-managers.input';

@InputType()
export class usersUpdateOneRequiredWithoutManager_withdraw_managersNestedInput {

    @Field(() => usersCreateWithoutManager_withdraw_managersInput, {nullable:true})
    @Type(() => usersCreateWithoutManager_withdraw_managersInput)
    create?: usersCreateWithoutManager_withdraw_managersInput;

    @Field(() => usersCreateOrConnectWithoutManager_withdraw_managersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutManager_withdraw_managersInput)
    connectOrCreate?: usersCreateOrConnectWithoutManager_withdraw_managersInput;

    @Field(() => usersUpsertWithoutManager_withdraw_managersInput, {nullable:true})
    @Type(() => usersUpsertWithoutManager_withdraw_managersInput)
    upsert?: usersUpsertWithoutManager_withdraw_managersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutManager_withdraw_managersInput, {nullable:true})
    @Type(() => usersUpdateWithoutManager_withdraw_managersInput)
    update?: usersUpdateWithoutManager_withdraw_managersInput;
}
