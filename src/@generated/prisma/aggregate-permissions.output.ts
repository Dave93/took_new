import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PermissionsCountAggregate } from './permissions-count-aggregate.output';
import { PermissionsMinAggregate } from './permissions-min-aggregate.output';
import { PermissionsMaxAggregate } from './permissions-max-aggregate.output';

@ObjectType()
export class AggregatePermissions {

    @Field(() => PermissionsCountAggregate, {nullable:true})
    _count?: PermissionsCountAggregate;

    @Field(() => PermissionsMinAggregate, {nullable:true})
    _min?: PermissionsMinAggregate;

    @Field(() => PermissionsMaxAggregate, {nullable:true})
    _max?: PermissionsMaxAggregate;
}
