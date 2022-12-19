import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manager_withdrawCreateManyManager_withdraw_managersInput } from './manager-withdraw-create-many-manager-withdraw-managers.input';
import { Type } from 'class-transformer';

@InputType()
export class manager_withdrawCreateManyManager_withdraw_managersInputEnvelope {

    @Field(() => [manager_withdrawCreateManyManager_withdraw_managersInput], {nullable:false})
    @Type(() => manager_withdrawCreateManyManager_withdraw_managersInput)
    data!: Array<manager_withdrawCreateManyManager_withdraw_managersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
