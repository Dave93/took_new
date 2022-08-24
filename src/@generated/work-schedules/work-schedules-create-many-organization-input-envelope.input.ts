import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { work_schedulesCreateManyOrganizationInput } from './work-schedules-create-many-organization.input';
import { Type } from 'class-transformer';

@InputType()
export class work_schedulesCreateManyOrganizationInputEnvelope {

    @Field(() => [work_schedulesCreateManyOrganizationInput], {nullable:false})
    @Type(() => work_schedulesCreateManyOrganizationInput)
    data!: Array<work_schedulesCreateManyOrganizationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
