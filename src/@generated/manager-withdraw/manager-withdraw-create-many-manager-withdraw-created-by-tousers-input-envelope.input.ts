import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manager_withdrawCreateManyManager_withdraw_created_byTousersInput } from './manager-withdraw-create-many-manager-withdraw-created-by-tousers.input';
import { Type } from 'class-transformer';

@InputType()
export class manager_withdrawCreateManyManager_withdraw_created_byTousersInputEnvelope {

    @Field(() => [manager_withdrawCreateManyManager_withdraw_created_byTousersInput], {nullable:false})
    @Type(() => manager_withdrawCreateManyManager_withdraw_created_byTousersInput)
    data!: Array<manager_withdrawCreateManyManager_withdraw_created_byTousersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
