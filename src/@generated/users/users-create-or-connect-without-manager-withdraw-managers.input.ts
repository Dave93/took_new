import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutManager_withdraw_managersInput } from './users-create-without-manager-withdraw-managers.input';

@InputType()
export class usersCreateOrConnectWithoutManager_withdraw_managersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutManager_withdraw_managersInput, {nullable:false})
    @Type(() => usersCreateWithoutManager_withdraw_managersInput)
    create!: usersCreateWithoutManager_withdraw_managersInput;
}
