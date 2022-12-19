import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutManager_withdraw_managersInput } from './users-create-without-manager-withdraw-managers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutManager_withdraw_managersInput } from './users-create-or-connect-without-manager-withdraw-managers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutManager_withdraw_managersInput {

    @Field(() => usersCreateWithoutManager_withdraw_managersInput, {nullable:true})
    @Type(() => usersCreateWithoutManager_withdraw_managersInput)
    create?: usersCreateWithoutManager_withdraw_managersInput;

    @Field(() => usersCreateOrConnectWithoutManager_withdraw_managersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutManager_withdraw_managersInput)
    connectOrCreate?: usersCreateOrConnectWithoutManager_withdraw_managersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}
