import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateNestedOneWithoutWork_schedules_created_byTousersInput } from '../users/users-create-nested-one-without-work-schedules-created-by-tousers.input';
import { usersCreateNestedOneWithoutWork_schedules_updated_byTousersInput } from '../users/users-create-nested-one-without-work-schedules-updated-by-tousers.input';

@InputType()
export class work_schedulesCreateWithoutOrganizationInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [String], {nullable:true})
    days?: Array<string>;

    @Field(() => Date, {nullable:false})
    start_time!: Date | string;

    @Field(() => Date, {nullable:false})
    end_time!: Date | string;

    @Field(() => Date, {nullable:false})
    max_start_time!: Date | string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersCreateNestedOneWithoutWork_schedules_created_byTousersInput, {nullable:true})
    work_schedules_created_byTousers?: usersCreateNestedOneWithoutWork_schedules_created_byTousersInput;

    @Field(() => usersCreateNestedOneWithoutWork_schedules_updated_byTousersInput, {nullable:true})
    work_schedules_updated_byTousers?: usersCreateNestedOneWithoutWork_schedules_updated_byTousersInput;
}
