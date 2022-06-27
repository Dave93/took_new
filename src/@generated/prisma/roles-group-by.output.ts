import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RolesCountAggregate } from './roles-count-aggregate.output';
import { RolesAvgAggregate } from './roles-avg-aggregate.output';
import { RolesSumAggregate } from './roles-sum-aggregate.output';
import { RolesMinAggregate } from './roles-min-aggregate.output';
import { RolesMaxAggregate } from './roles-max-aggregate.output';

@ObjectType()
export class RolesGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;

    @Field(() => RolesCountAggregate, {nullable:true})
    _count?: RolesCountAggregate;

    @Field(() => RolesAvgAggregate, {nullable:true})
    _avg?: RolesAvgAggregate;

    @Field(() => RolesSumAggregate, {nullable:true})
    _sum?: RolesSumAggregate;

    @Field(() => RolesMinAggregate, {nullable:true})
    _min?: RolesMinAggregate;

    @Field(() => RolesMaxAggregate, {nullable:true})
    _max?: RolesMaxAggregate;
}
