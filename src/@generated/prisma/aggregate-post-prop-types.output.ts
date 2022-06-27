import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Post_prop_typesCountAggregate } from './post-prop-types-count-aggregate.output';
import { Post_prop_typesMinAggregate } from './post-prop-types-min-aggregate.output';
import { Post_prop_typesMaxAggregate } from './post-prop-types-max-aggregate.output';

@ObjectType()
export class AggregatePost_prop_types {

    @Field(() => Post_prop_typesCountAggregate, {nullable:true})
    _count?: Post_prop_typesCountAggregate;

    @Field(() => Post_prop_typesMinAggregate, {nullable:true})
    _min?: Post_prop_typesMinAggregate;

    @Field(() => Post_prop_typesMaxAggregate, {nullable:true})
    _max?: Post_prop_typesMaxAggregate;
}
