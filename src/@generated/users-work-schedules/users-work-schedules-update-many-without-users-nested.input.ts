import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_work_schedulesCreateWithoutUsersInput } from './users-work-schedules-create-without-users.input';
import { Type } from 'class-transformer';
import { users_work_schedulesCreateOrConnectWithoutUsersInput } from './users-work-schedules-create-or-connect-without-users.input';
import { users_work_schedulesUpsertWithWhereUniqueWithoutUsersInput } from './users-work-schedules-upsert-with-where-unique-without-users.input';
import { users_work_schedulesCreateManyUsersInputEnvelope } from './users-work-schedules-create-many-users-input-envelope.input';
import { users_work_schedulesWhereUniqueInput } from './users-work-schedules-where-unique.input';
import { users_work_schedulesUpdateWithWhereUniqueWithoutUsersInput } from './users-work-schedules-update-with-where-unique-without-users.input';
import { users_work_schedulesUpdateManyWithWhereWithoutUsersInput } from './users-work-schedules-update-many-with-where-without-users.input';
import { users_work_schedulesScalarWhereInput } from './users-work-schedules-scalar-where.input';

@InputType()
export class users_work_schedulesUpdateManyWithoutUsersNestedInput {

    @Field(() => [users_work_schedulesCreateWithoutUsersInput], {nullable:true})
    @Type(() => users_work_schedulesCreateWithoutUsersInput)
    create?: Array<users_work_schedulesCreateWithoutUsersInput>;

    @Field(() => [users_work_schedulesCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => users_work_schedulesCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<users_work_schedulesCreateOrConnectWithoutUsersInput>;

    @Field(() => [users_work_schedulesUpsertWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => users_work_schedulesUpsertWithWhereUniqueWithoutUsersInput)
    upsert?: Array<users_work_schedulesUpsertWithWhereUniqueWithoutUsersInput>;

    @Field(() => users_work_schedulesCreateManyUsersInputEnvelope, {nullable:true})
    @Type(() => users_work_schedulesCreateManyUsersInputEnvelope)
    createMany?: users_work_schedulesCreateManyUsersInputEnvelope;

    @Field(() => [users_work_schedulesWhereUniqueInput], {nullable:true})
    @Type(() => users_work_schedulesWhereUniqueInput)
    set?: Array<users_work_schedulesWhereUniqueInput>;

    @Field(() => [users_work_schedulesWhereUniqueInput], {nullable:true})
    @Type(() => users_work_schedulesWhereUniqueInput)
    disconnect?: Array<users_work_schedulesWhereUniqueInput>;

    @Field(() => [users_work_schedulesWhereUniqueInput], {nullable:true})
    @Type(() => users_work_schedulesWhereUniqueInput)
    delete?: Array<users_work_schedulesWhereUniqueInput>;

    @Field(() => [users_work_schedulesWhereUniqueInput], {nullable:true})
    @Type(() => users_work_schedulesWhereUniqueInput)
    connect?: Array<users_work_schedulesWhereUniqueInput>;

    @Field(() => [users_work_schedulesUpdateWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => users_work_schedulesUpdateWithWhereUniqueWithoutUsersInput)
    update?: Array<users_work_schedulesUpdateWithWhereUniqueWithoutUsersInput>;

    @Field(() => [users_work_schedulesUpdateManyWithWhereWithoutUsersInput], {nullable:true})
    @Type(() => users_work_schedulesUpdateManyWithWhereWithoutUsersInput)
    updateMany?: Array<users_work_schedulesUpdateManyWithWhereWithoutUsersInput>;

    @Field(() => [users_work_schedulesScalarWhereInput], {nullable:true})
    @Type(() => users_work_schedulesScalarWhereInput)
    deleteMany?: Array<users_work_schedulesScalarWhereInput>;
}
