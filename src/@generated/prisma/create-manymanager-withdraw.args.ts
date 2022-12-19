import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { manager_withdrawCreateManyInput } from '../manager-withdraw/manager-withdraw-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManymanagerWithdrawArgs {

    @Field(() => [manager_withdrawCreateManyInput], {nullable:false})
    @Type(() => manager_withdrawCreateManyInput)
    data!: Array<manager_withdrawCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
