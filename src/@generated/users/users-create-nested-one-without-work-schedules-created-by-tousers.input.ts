import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutWork_schedules_created_byTousersInput } from './users-create-without-work-schedules-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutWork_schedules_created_byTousersInput } from './users-create-or-connect-without-work-schedules-created-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutWork_schedules_created_byTousersInput {

    @Field(() => usersCreateWithoutWork_schedules_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutWork_schedules_created_byTousersInput)
    create?: usersCreateWithoutWork_schedules_created_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutWork_schedules_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutWork_schedules_created_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutWork_schedules_created_byTousersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}
