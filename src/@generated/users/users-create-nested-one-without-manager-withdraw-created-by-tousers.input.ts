import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutManager_withdraw_created_byTousersInput } from './users-create-without-manager-withdraw-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutManager_withdraw_created_byTousersInput } from './users-create-or-connect-without-manager-withdraw-created-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutManager_withdraw_created_byTousersInput {

    @Field(() => usersCreateWithoutManager_withdraw_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutManager_withdraw_created_byTousersInput)
    create?: usersCreateWithoutManager_withdraw_created_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutManager_withdraw_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutManager_withdraw_created_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutManager_withdraw_created_byTousersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}
