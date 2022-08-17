import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RolesCountAggregate } from './roles-count-aggregate.output';
import { RolesMinAggregate } from './roles-min-aggregate.output';
import { RolesMaxAggregate } from './roles-max-aggregate.output';

@ObjectType()
export class AggregateRoles {

    @Field(() => RolesCountAggregate, {nullable:true})
    _count?: RolesCountAggregate;

    @Field(() => RolesMinAggregate, {nullable:true})
    _min?: RolesMinAggregate;

    @Field(() => RolesMaxAggregate, {nullable:true})
    _max?: RolesMaxAggregate;
}
