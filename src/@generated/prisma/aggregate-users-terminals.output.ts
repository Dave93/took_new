import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Users_terminalsCountAggregate } from './users-terminals-count-aggregate.output';
import { Users_terminalsMinAggregate } from './users-terminals-min-aggregate.output';
import { Users_terminalsMaxAggregate } from './users-terminals-max-aggregate.output';

@ObjectType()
export class AggregateUsers_terminals {

    @Field(() => Users_terminalsCountAggregate, {nullable:true})
    _count?: Users_terminalsCountAggregate;

    @Field(() => Users_terminalsMinAggregate, {nullable:true})
    _min?: Users_terminalsMinAggregate;

    @Field(() => Users_terminalsMaxAggregate, {nullable:true})
    _max?: Users_terminalsMaxAggregate;
}
