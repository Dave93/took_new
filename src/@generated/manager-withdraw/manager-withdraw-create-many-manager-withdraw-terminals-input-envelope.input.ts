import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manager_withdrawCreateManyManager_withdraw_terminalsInput } from './manager-withdraw-create-many-manager-withdraw-terminals.input';
import { Type } from 'class-transformer';

@InputType()
export class manager_withdrawCreateManyManager_withdraw_terminalsInputEnvelope {

    @Field(() => [manager_withdrawCreateManyManager_withdraw_terminalsInput], {nullable:false})
    @Type(() => manager_withdrawCreateManyManager_withdraw_terminalsInput)
    data!: Array<manager_withdrawCreateManyManager_withdraw_terminalsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
