import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_work_schedulesCreateWithoutWork_schedulesInput } from './users-work-schedules-create-without-work-schedules.input';
import { Type } from 'class-transformer';
import { users_work_schedulesCreateOrConnectWithoutWork_schedulesInput } from './users-work-schedules-create-or-connect-without-work-schedules.input';
import { users_work_schedulesCreateManyWork_schedulesInputEnvelope } from './users-work-schedules-create-many-work-schedules-input-envelope.input';
import { users_work_schedulesWhereUniqueInput } from './users-work-schedules-where-unique.input';

@InputType()
export class users_work_schedulesUncheckedCreateNestedManyWithoutWork_schedulesInput {

    @Field(() => [users_work_schedulesCreateWithoutWork_schedulesInput], {nullable:true})
    @Type(() => users_work_schedulesCreateWithoutWork_schedulesInput)
    create?: Array<users_work_schedulesCreateWithoutWork_schedulesInput>;

    @Field(() => [users_work_schedulesCreateOrConnectWithoutWork_schedulesInput], {nullable:true})
    @Type(() => users_work_schedulesCreateOrConnectWithoutWork_schedulesInput)
    connectOrCreate?: Array<users_work_schedulesCreateOrConnectWithoutWork_schedulesInput>;

    @Field(() => users_work_schedulesCreateManyWork_schedulesInputEnvelope, {nullable:true})
    @Type(() => users_work_schedulesCreateManyWork_schedulesInputEnvelope)
    createMany?: users_work_schedulesCreateManyWork_schedulesInputEnvelope;

    @Field(() => [users_work_schedulesWhereUniqueInput], {nullable:true})
    @Type(() => users_work_schedulesWhereUniqueInput)
    connect?: Array<users_work_schedulesWhereUniqueInput>;
}
