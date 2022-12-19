import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutManager_withdraw_managersInput } from './users-update-without-manager-withdraw-managers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutManager_withdraw_managersInput } from './users-create-without-manager-withdraw-managers.input';

@InputType()
export class usersUpsertWithoutManager_withdraw_managersInput {

    @Field(() => usersUpdateWithoutManager_withdraw_managersInput, {nullable:false})
    @Type(() => usersUpdateWithoutManager_withdraw_managersInput)
    update!: usersUpdateWithoutManager_withdraw_managersInput;

    @Field(() => usersCreateWithoutManager_withdraw_managersInput, {nullable:false})
    @Type(() => usersCreateWithoutManager_withdraw_managersInput)
    create!: usersCreateWithoutManager_withdraw_managersInput;
}
