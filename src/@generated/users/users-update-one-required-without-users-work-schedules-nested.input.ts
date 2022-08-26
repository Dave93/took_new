import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutUsers_work_schedulesInput } from './users-create-without-users-work-schedules.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutUsers_work_schedulesInput } from './users-create-or-connect-without-users-work-schedules.input';
import { usersUpsertWithoutUsers_work_schedulesInput } from './users-upsert-without-users-work-schedules.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutUsers_work_schedulesInput } from './users-update-without-users-work-schedules.input';

@InputType()
export class usersUpdateOneRequiredWithoutUsers_work_schedulesNestedInput {

    @Field(() => usersCreateWithoutUsers_work_schedulesInput, {nullable:true})
    @Type(() => usersCreateWithoutUsers_work_schedulesInput)
    create?: usersCreateWithoutUsers_work_schedulesInput;

    @Field(() => usersCreateOrConnectWithoutUsers_work_schedulesInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutUsers_work_schedulesInput)
    connectOrCreate?: usersCreateOrConnectWithoutUsers_work_schedulesInput;

    @Field(() => usersUpsertWithoutUsers_work_schedulesInput, {nullable:true})
    @Type(() => usersUpsertWithoutUsers_work_schedulesInput)
    upsert?: usersUpsertWithoutUsers_work_schedulesInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutUsers_work_schedulesInput, {nullable:true})
    @Type(() => usersUpdateWithoutUsers_work_schedulesInput)
    update?: usersUpdateWithoutUsers_work_schedulesInput;
}
