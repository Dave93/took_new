import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_work_schedulesWhereInput } from '../users-work-schedules/users-work-schedules-where.input';

@InputType()
export class Users_work_schedulesListRelationFilter {

    @Field(() => users_work_schedulesWhereInput, {nullable:true})
    every?: users_work_schedulesWhereInput;

    @Field(() => users_work_schedulesWhereInput, {nullable:true})
    some?: users_work_schedulesWhereInput;

    @Field(() => users_work_schedulesWhereInput, {nullable:true})
    none?: users_work_schedulesWhereInput;
}
