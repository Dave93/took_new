import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { organization } from '../organization/organization.model';
import { users } from '../users/users.model';

@ObjectType()
export class work_schedules {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    organization_id!: string;

    @Field(() => organization, {nullable:false})
    organization?: organization;

    @Field(() => [String], {nullable:true})
    days!: Array<string>;

    @Field(() => Date, {nullable:false})
    start_time!: Date;

    @Field(() => Date, {nullable:false})
    end_time!: Date;

    @Field(() => Date, {nullable:false})
    max_start_time!: Date;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => String, {nullable:true})
    created_by!: string | null;

    @Field(() => String, {nullable:true})
    updated_by!: string | null;

    @Field(() => users, {nullable:true})
    work_schedules_created_byTousers?: users | null;

    @Field(() => users, {nullable:true})
    work_schedules_updated_byTousers?: users | null;
}