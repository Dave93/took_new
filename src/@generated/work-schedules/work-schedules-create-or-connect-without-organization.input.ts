import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { work_schedulesWhereUniqueInput } from './work-schedules-where-unique.input';
import { Type } from 'class-transformer';
import { work_schedulesCreateWithoutOrganizationInput } from './work-schedules-create-without-organization.input';

@InputType()
export class work_schedulesCreateOrConnectWithoutOrganizationInput {

    @Field(() => work_schedulesWhereUniqueInput, {nullable:false})
    @Type(() => work_schedulesWhereUniqueInput)
    where!: work_schedulesWhereUniqueInput;

    @Field(() => work_schedulesCreateWithoutOrganizationInput, {nullable:false})
    @Type(() => work_schedulesCreateWithoutOrganizationInput)
    create!: work_schedulesCreateWithoutOrganizationInput;
}
