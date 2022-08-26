import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_work_schedulesCreateWithoutWork_schedulesInput } from './users-work-schedules-create-without-work-schedules.input';
import { Type } from 'class-transformer';
import { users_work_schedulesCreateOrConnectWithoutWork_schedulesInput } from './users-work-schedules-create-or-connect-without-work-schedules.input';
import { users_work_schedulesUpsertWithWhereUniqueWithoutWork_schedulesInput } from './users-work-schedules-upsert-with-where-unique-without-work-schedules.input';
import { users_work_schedulesCreateManyWork_schedulesInputEnvelope } from './users-work-schedules-create-many-work-schedules-input-envelope.input';
import { users_work_schedulesWhereUniqueInput } from './users-work-schedules-where-unique.input';
import { users_work_schedulesUpdateWithWhereUniqueWithoutWork_schedulesInput } from './users-work-schedules-update-with-where-unique-without-work-schedules.input';
import { users_work_schedulesUpdateManyWithWhereWithoutWork_schedulesInput } from './users-work-schedules-update-many-with-where-without-work-schedules.input';
import { users_work_schedulesScalarWhereInput } from './users-work-schedules-scalar-where.input';

@InputType()
export class users_work_schedulesUncheckedUpdateManyWithoutWork_schedulesNestedInput {

    @Field(() => [users_work_schedulesCreateWithoutWork_schedulesInput], {nullable:true})
    @Type(() => users_work_schedulesCreateWithoutWork_schedulesInput)
    create?: Array<users_work_schedulesCreateWithoutWork_schedulesInput>;

    @Field(() => [users_work_schedulesCreateOrConnectWithoutWork_schedulesInput], {nullable:true})
    @Type(() => users_work_schedulesCreateOrConnectWithoutWork_schedulesInput)
    connectOrCreate?: Array<users_work_schedulesCreateOrConnectWithoutWork_schedulesInput>;

    @Field(() => [users_work_schedulesUpsertWithWhereUniqueWithoutWork_schedulesInput], {nullable:true})
    @Type(() => users_work_schedulesUpsertWithWhereUniqueWithoutWork_schedulesInput)
    upsert?: Array<users_work_schedulesUpsertWithWhereUniqueWithoutWork_schedulesInput>;

    @Field(() => users_work_schedulesCreateManyWork_schedulesInputEnvelope, {nullable:true})
    @Type(() => users_work_schedulesCreateManyWork_schedulesInputEnvelope)
    createMany?: users_work_schedulesCreateManyWork_schedulesInputEnvelope;

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

    @Field(() => [users_work_schedulesUpdateWithWhereUniqueWithoutWork_schedulesInput], {nullable:true})
    @Type(() => users_work_schedulesUpdateWithWhereUniqueWithoutWork_schedulesInput)
    update?: Array<users_work_schedulesUpdateWithWhereUniqueWithoutWork_schedulesInput>;

    @Field(() => [users_work_schedulesUpdateManyWithWhereWithoutWork_schedulesInput], {nullable:true})
    @Type(() => users_work_schedulesUpdateManyWithWhereWithoutWork_schedulesInput)
    updateMany?: Array<users_work_schedulesUpdateManyWithWhereWithoutWork_schedulesInput>;

    @Field(() => [users_work_schedulesScalarWhereInput], {nullable:true})
    @Type(() => users_work_schedulesScalarWhereInput)
    deleteMany?: Array<users_work_schedulesScalarWhereInput>;
}
