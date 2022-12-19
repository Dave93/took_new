import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { System_configsCountAggregate } from './system-configs-count-aggregate.output';
import { System_configsMinAggregate } from './system-configs-min-aggregate.output';
import { System_configsMaxAggregate } from './system-configs-max-aggregate.output';

@ObjectType()
export class System_configsGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    value!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => System_configsCountAggregate, {nullable:true})
    _count?: System_configsCountAggregate;

    @Field(() => System_configsMinAggregate, {nullable:true})
    _min?: System_configsMinAggregate;

    @Field(() => System_configsMaxAggregate, {nullable:true})
    _max?: System_configsMaxAggregate;
}
