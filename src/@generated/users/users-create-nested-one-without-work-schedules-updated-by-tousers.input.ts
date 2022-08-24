import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutWork_schedules_updated_byTousersInput } from './users-create-without-work-schedules-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutWork_schedules_updated_byTousersInput } from './users-create-or-connect-without-work-schedules-updated-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutWork_schedules_updated_byTousersInput {

    @Field(() => usersCreateWithoutWork_schedules_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutWork_schedules_updated_byTousersInput)
    create?: usersCreateWithoutWork_schedules_updated_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutWork_schedules_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutWork_schedules_updated_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutWork_schedules_updated_byTousersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}
