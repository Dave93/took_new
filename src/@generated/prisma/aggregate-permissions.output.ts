import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PermissionsCountAggregate } from './permissions-count-aggregate.output';
import { PermissionsAvgAggregate } from './permissions-avg-aggregate.output';
import { PermissionsSumAggregate } from './permissions-sum-aggregate.output';
import { PermissionsMinAggregate } from './permissions-min-aggregate.output';
import { PermissionsMaxAggregate } from './permissions-max-aggregate.output';

@ObjectType()
export class AggregatePermissions {

    @Field(() => PermissionsCountAggregate, {nullable:true})
    _count?: PermissionsCountAggregate;

    @Field(() => PermissionsAvgAggregate, {nullable:true})
    _avg?: PermissionsAvgAggregate;

    @Field(() => PermissionsSumAggregate, {nullable:true})
    _sum?: PermissionsSumAggregate;

    @Field(() => PermissionsMinAggregate, {nullable:true})
    _min?: PermissionsMinAggregate;

    @Field(() => PermissionsMaxAggregate, {nullable:true})
    _max?: PermissionsMaxAggregate;
}
