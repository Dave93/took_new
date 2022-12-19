import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutManager_withdraw_created_byTousersInput } from './users-create-without-manager-withdraw-created-by-tousers.input';

@InputType()
export class usersCreateOrConnectWithoutManager_withdraw_created_byTousersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutManager_withdraw_created_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutManager_withdraw_created_byTousersInput)
    create!: usersCreateWithoutManager_withdraw_created_byTousersInput;
}
