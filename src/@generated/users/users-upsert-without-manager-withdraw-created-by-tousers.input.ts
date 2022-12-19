import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutManager_withdraw_created_byTousersInput } from './users-update-without-manager-withdraw-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutManager_withdraw_created_byTousersInput } from './users-create-without-manager-withdraw-created-by-tousers.input';

@InputType()
export class usersUpsertWithoutManager_withdraw_created_byTousersInput {

    @Field(() => usersUpdateWithoutManager_withdraw_created_byTousersInput, {nullable:false})
    @Type(() => usersUpdateWithoutManager_withdraw_created_byTousersInput)
    update!: usersUpdateWithoutManager_withdraw_created_byTousersInput;

    @Field(() => usersCreateWithoutManager_withdraw_created_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutManager_withdraw_created_byTousersInput)
    create!: usersCreateWithoutManager_withdraw_created_byTousersInput;
}
