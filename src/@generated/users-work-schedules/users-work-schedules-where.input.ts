import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { UsersRelationFilter } from '../prisma/users-relation-filter.input';
import { Work_schedulesRelationFilter } from '../prisma/work-schedules-relation-filter.input';

@InputType()
export class users_work_schedulesWhereInput {

    @Field(() => [users_work_schedulesWhereInput], {nullable:true})
    AND?: Array<users_work_schedulesWhereInput>;

    @Field(() => [users_work_schedulesWhereInput], {nullable:true})
    OR?: Array<users_work_schedulesWhereInput>;

    @Field(() => [users_work_schedulesWhereInput], {nullable:true})
    NOT?: Array<users_work_schedulesWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    user_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    work_schedule_id?: StringFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    users?: UsersRelationFilter;

    @Field(() => Work_schedulesRelationFilter, {nullable:true})
    work_schedules?: Work_schedulesRelationFilter;
}
