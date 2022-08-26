import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class users_work_schedulesCreateManyUsersInput {

    @Field(() => String, {nullable:false})
    work_schedule_id!: string;
}
