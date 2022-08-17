import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Roles_permissionsCountAggregate } from './roles-permissions-count-aggregate.output';
import { Roles_permissionsMinAggregate } from './roles-permissions-min-aggregate.output';
import { Roles_permissionsMaxAggregate } from './roles-permissions-max-aggregate.output';

@ObjectType()
export class AggregateRoles_permissions {

    @Field(() => Roles_permissionsCountAggregate, {nullable:true})
    _count?: Roles_permissionsCountAggregate;

    @Field(() => Roles_permissionsMinAggregate, {nullable:true})
    _min?: Roles_permissionsMinAggregate;

    @Field(() => Roles_permissionsMaxAggregate, {nullable:true})
    _max?: Roles_permissionsMaxAggregate;
}
