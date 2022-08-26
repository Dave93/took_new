import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_work_schedulesCreateWithoutUsersInput } from './users-work-schedules-create-without-users.input';
import { Type } from 'class-transformer';
import { users_work_schedulesCreateOrConnectWithoutUsersInput } from './users-work-schedules-create-or-connect-without-users.input';
import { users_work_schedulesCreateManyUsersInputEnvelope } from './users-work-schedules-create-many-users-input-envelope.input';
import { users_work_schedulesWhereUniqueInput } from './users-work-schedules-where-unique.input';

@InputType()
export class users_work_schedulesUncheckedCreateNestedManyWithoutUsersInput {

    @Field(() => [users_work_schedulesCreateWithoutUsersInput], {nullable:true})
    @Type(() => users_work_schedulesCreateWithoutUsersInput)
    create?: Array<users_work_schedulesCreateWithoutUsersInput>;

    @Field(() => [users_work_schedulesCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => users_work_schedulesCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<users_work_schedulesCreateOrConnectWithoutUsersInput>;

    @Field(() => users_work_schedulesCreateManyUsersInputEnvelope, {nullable:true})
    @Type(() => users_work_schedulesCreateManyUsersInputEnvelope)
    createMany?: users_work_schedulesCreateManyUsersInputEnvelope;

    @Field(() => [users_work_schedulesWhereUniqueInput], {nullable:true})
    @Type(() => users_work_schedulesWhereUniqueInput)
    connect?: Array<users_work_schedulesWhereUniqueInput>;
}
