import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manager_withdrawCreateManyManager_withdraw_couriersInput } from './manager-withdraw-create-many-manager-withdraw-couriers.input';
import { Type } from 'class-transformer';

@InputType()
export class manager_withdrawCreateManyManager_withdraw_couriersInputEnvelope {

    @Field(() => [manager_withdrawCreateManyManager_withdraw_couriersInput], {nullable:false})
    @Type(() => manager_withdrawCreateManyManager_withdraw_couriersInput)
    data!: Array<manager_withdrawCreateManyManager_withdraw_couriersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
