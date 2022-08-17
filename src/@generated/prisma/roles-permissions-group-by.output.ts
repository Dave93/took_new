import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Roles_permissionsCountAggregate } from './roles-permissions-count-aggregate.output';
import { Roles_permissionsMinAggregate } from './roles-permissions-min-aggregate.output';
import { Roles_permissionsMaxAggregate } from './roles-permissions-max-aggregate.output';

@ObjectType()
export class Roles_permissionsGroupBy {

    @Field(() => String, {nullable:false})
    role_id!: string;

    @Field(() => String, {nullable:false})
    permission_id!: string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;

    @Field(() => Roles_permissionsCountAggregate, {nullable:true})
    _count?: Roles_permissionsCountAggregate;

    @Field(() => Roles_permissionsMinAggregate, {nullable:true})
    _min?: Roles_permissionsMinAggregate;

    @Field(() => Roles_permissionsMaxAggregate, {nullable:true})
    _max?: Roles_permissionsMaxAggregate;
}
