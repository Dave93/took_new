import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class users_work_schedulesScalarWhereInput {

    @Field(() => [users_work_schedulesScalarWhereInput], {nullable:true})
    AND?: Array<users_work_schedulesScalarWhereInput>;

    @Field(() => [users_work_schedulesScalarWhereInput], {nullable:true})
    OR?: Array<users_work_schedulesScalarWhereInput>;

    @Field(() => [users_work_schedulesScalarWhereInput], {nullable:true})
    NOT?: Array<users_work_schedulesScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    user_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    work_schedule_id?: StringFilter;
}
