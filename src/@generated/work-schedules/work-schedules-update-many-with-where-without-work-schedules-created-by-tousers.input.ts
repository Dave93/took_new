import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { work_schedulesScalarWhereInput } from './work-schedules-scalar-where.input';
import { Type } from 'class-transformer';
import { work_schedulesUpdateManyMutationInput } from './work-schedules-update-many-mutation.input';

@InputType()
export class work_schedulesUpdateManyWithWhereWithoutWork_schedules_created_byTousersInput {

    @Field(() => work_schedulesScalarWhereInput, {nullable:false})
    @Type(() => work_schedulesScalarWhereInput)
    where!: work_schedulesScalarWhereInput;

    @Field(() => work_schedulesUpdateManyMutationInput, {nullable:false})
    @Type(() => work_schedulesUpdateManyMutationInput)
    data!: work_schedulesUpdateManyMutationInput;
}
