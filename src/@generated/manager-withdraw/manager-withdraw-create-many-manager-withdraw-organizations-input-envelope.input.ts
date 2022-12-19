import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manager_withdrawCreateManyManager_withdraw_organizationsInput } from './manager-withdraw-create-many-manager-withdraw-organizations.input';
import { Type } from 'class-transformer';

@InputType()
export class manager_withdrawCreateManyManager_withdraw_organizationsInputEnvelope {

    @Field(() => [manager_withdrawCreateManyManager_withdraw_organizationsInput], {nullable:false})
    @Type(() => manager_withdrawCreateManyManager_withdraw_organizationsInput)
    data!: Array<manager_withdrawCreateManyManager_withdraw_organizationsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
