import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manager_withdrawWhereUniqueInput } from './manager-withdraw-where-unique.input';
import { Type } from 'class-transformer';
import { manager_withdrawCreateWithoutManager_withdraw_created_byTousersInput } from './manager-withdraw-create-without-manager-withdraw-created-by-tousers.input';

@InputType()
export class manager_withdrawCreateOrConnectWithoutManager_withdraw_created_byTousersInput {

    @Field(() => manager_withdrawWhereUniqueInput, {nullable:false})
    @Type(() => manager_withdrawWhereUniqueInput)
    where!: manager_withdrawWhereUniqueInput;

    @Field(() => manager_withdrawCreateWithoutManager_withdraw_created_byTousersInput, {nullable:false})
    @Type(() => manager_withdrawCreateWithoutManager_withdraw_created_byTousersInput)
    create!: manager_withdrawCreateWithoutManager_withdraw_created_byTousersInput;
}
