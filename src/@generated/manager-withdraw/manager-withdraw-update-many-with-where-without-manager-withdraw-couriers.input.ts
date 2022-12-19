import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manager_withdrawScalarWhereInput } from './manager-withdraw-scalar-where.input';
import { Type } from 'class-transformer';
import { manager_withdrawUpdateManyMutationInput } from './manager-withdraw-update-many-mutation.input';

@InputType()
export class manager_withdrawUpdateManyWithWhereWithoutManager_withdraw_couriersInput {

    @Field(() => manager_withdrawScalarWhereInput, {nullable:false})
    @Type(() => manager_withdrawScalarWhereInput)
    where!: manager_withdrawScalarWhereInput;

    @Field(() => manager_withdrawUpdateManyMutationInput, {nullable:false})
    @Type(() => manager_withdrawUpdateManyMutationInput)
    data!: manager_withdrawUpdateManyMutationInput;
}
