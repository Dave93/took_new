import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manager_withdrawWhereInput } from '../manager-withdraw/manager-withdraw-where.input';

@InputType()
export class Manager_withdrawRelationFilter {

    @Field(() => manager_withdrawWhereInput, {nullable:true})
    is?: manager_withdrawWhereInput;

    @Field(() => manager_withdrawWhereInput, {nullable:true})
    isNot?: manager_withdrawWhereInput;
}
