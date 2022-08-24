import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { organization_system_type } from './organization-system-type.enum';
import { work_schedules } from '../work-schedules/work-schedules.model';
import { users } from '../users/users.model';
import { OrganizationCount } from '../prisma/organization-count.output';

@ObjectType()
export class organization {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    external_id!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    active!: boolean;

    @Field(() => organization_system_type, {nullable:false,defaultValue:'iiko'})
    system_type!: keyof typeof organization_system_type;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => String, {nullable:true})
    webhook!: string | null;

    @Field(() => String, {nullable:true})
    group_id!: string | null;

    @Field(() => String, {nullable:true})
    apelsin_login!: string | null;

    @Field(() => String, {nullable:true})
    apelsin_password!: string | null;

    @Field(() => String, {nullable:true})
    sender_name!: string | null;

    @Field(() => String, {nullable:true})
    sender_number!: string | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => String, {nullable:true})
    created_by!: string | null;

    @Field(() => String, {nullable:true})
    updated_by!: string | null;

    @Field(() => [work_schedules], {nullable:true})
    work_schedules_organization_idTorganization?: Array<work_schedules>;

    @Field(() => users, {nullable:true})
    organization_created_byTousers?: users | null;

    @Field(() => users, {nullable:true})
    organization_updated_byTousers?: users | null;

    @Field(() => OrganizationCount, {nullable:false})
    _count?: OrganizationCount;
}
