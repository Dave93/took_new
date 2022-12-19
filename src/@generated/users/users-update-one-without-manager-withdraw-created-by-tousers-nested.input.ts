import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutManager_withdraw_created_byTousersInput } from './users-create-without-manager-withdraw-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutManager_withdraw_created_byTousersInput } from './users-create-or-connect-without-manager-withdraw-created-by-tousers.input';
import { usersUpsertWithoutManager_withdraw_created_byTousersInput } from './users-upsert-without-manager-withdraw-created-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutManager_withdraw_created_byTousersInput } from './users-update-without-manager-withdraw-created-by-tousers.input';

@InputType()
export class usersUpdateOneWithoutManager_withdraw_created_byTousersNestedInput {

    @Field(() => usersCreateWithoutManager_withdraw_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutManager_withdraw_created_byTousersInput)
    create?: usersCreateWithoutManager_withdraw_created_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutManager_withdraw_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutManager_withdraw_created_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutManager_withdraw_created_byTousersInput;

    @Field(() => usersUpsertWithoutManager_withdraw_created_byTousersInput, {nullable:true})
    @Type(() => usersUpsertWithoutManager_withdraw_created_byTousersInput)
    upsert?: usersUpsertWithoutManager_withdraw_created_byTousersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutManager_withdraw_created_byTousersInput, {nullable:true})
    @Type(() => usersUpdateWithoutManager_withdraw_created_byTousersInput)
    update?: usersUpdateWithoutManager_withdraw_created_byTousersInput;
}
