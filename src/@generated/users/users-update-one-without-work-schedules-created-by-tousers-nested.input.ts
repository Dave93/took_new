import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutWork_schedules_created_byTousersInput } from './users-create-without-work-schedules-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutWork_schedules_created_byTousersInput } from './users-create-or-connect-without-work-schedules-created-by-tousers.input';
import { usersUpsertWithoutWork_schedules_created_byTousersInput } from './users-upsert-without-work-schedules-created-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutWork_schedules_created_byTousersInput } from './users-update-without-work-schedules-created-by-tousers.input';

@InputType()
export class usersUpdateOneWithoutWork_schedules_created_byTousersNestedInput {

    @Field(() => usersCreateWithoutWork_schedules_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutWork_schedules_created_byTousersInput)
    create?: usersCreateWithoutWork_schedules_created_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutWork_schedules_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutWork_schedules_created_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutWork_schedules_created_byTousersInput;

    @Field(() => usersUpsertWithoutWork_schedules_created_byTousersInput, {nullable:true})
    @Type(() => usersUpsertWithoutWork_schedules_created_byTousersInput)
    upsert?: usersUpsertWithoutWork_schedules_created_byTousersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutWork_schedules_created_byTousersInput, {nullable:true})
    @Type(() => usersUpdateWithoutWork_schedules_created_byTousersInput)
    update?: usersUpdateWithoutWork_schedules_created_byTousersInput;
}
