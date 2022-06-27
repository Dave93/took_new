import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MigrationsCountAggregate } from './migrations-count-aggregate.output';
import { MigrationsAvgAggregate } from './migrations-avg-aggregate.output';
import { MigrationsSumAggregate } from './migrations-sum-aggregate.output';
import { MigrationsMinAggregate } from './migrations-min-aggregate.output';
import { MigrationsMaxAggregate } from './migrations-max-aggregate.output';

@ObjectType()
export class AggregateMigrations {

    @Field(() => MigrationsCountAggregate, {nullable:true})
    _count?: MigrationsCountAggregate;

    @Field(() => MigrationsAvgAggregate, {nullable:true})
    _avg?: MigrationsAvgAggregate;

    @Field(() => MigrationsSumAggregate, {nullable:true})
    _sum?: MigrationsSumAggregate;

    @Field(() => MigrationsMinAggregate, {nullable:true})
    _min?: MigrationsMinAggregate;

    @Field(() => MigrationsMaxAggregate, {nullable:true})
    _max?: MigrationsMaxAggregate;
}
