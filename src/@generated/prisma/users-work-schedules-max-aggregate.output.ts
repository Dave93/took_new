import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Users_work_schedulesMaxAggregate {

    @Field(() => String, {nullable:true})
    user_id?: string;

    @Field(() => String, {nullable:true})
    work_schedule_id?: string;
}
