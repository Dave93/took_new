import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class OrganizationCount {

    @Field(() => Int, {nullable:false})
    work_schedules_organization_idTorganization!: number;
}
