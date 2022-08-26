import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutUsers_work_schedulesInput } from './users-create-without-users-work-schedules.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutUsers_work_schedulesInput } from './users-create-or-connect-without-users-work-schedules.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutUsers_work_schedulesInput {

    @Field(() => usersCreateWithoutUsers_work_schedulesInput, {nullable:true})
    @Type(() => usersCreateWithoutUsers_work_schedulesInput)
    create?: usersCreateWithoutUsers_work_schedulesInput;

    @Field(() => usersCreateOrConnectWithoutUsers_work_schedulesInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutUsers_work_schedulesInput)
    connectOrCreate?: usersCreateOrConnectWithoutUsers_work_schedulesInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}
