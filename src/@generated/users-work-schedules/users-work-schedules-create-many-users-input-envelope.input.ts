import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_work_schedulesCreateManyUsersInput } from './users-work-schedules-create-many-users.input';
import { Type } from 'class-transformer';

@InputType()
export class users_work_schedulesCreateManyUsersInputEnvelope {

    @Field(() => [users_work_schedulesCreateManyUsersInput], {nullable:false})
    @Type(() => users_work_schedulesCreateManyUsersInput)
    data!: Array<users_work_schedulesCreateManyUsersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
