import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manager_withdrawWhereInput } from '../manager-withdraw/manager-withdraw-where.input';

@InputType()
export class Manager_withdrawListRelationFilter {

    @Field(() => manager_withdrawWhereInput, {nullable:true})
    every?: manager_withdrawWhereInput;

    @Field(() => manager_withdrawWhereInput, {nullable:true})
    some?: manager_withdrawWhereInput;

    @Field(() => manager_withdrawWhereInput, {nullable:true})
    none?: manager_withdrawWhereInput;
}
