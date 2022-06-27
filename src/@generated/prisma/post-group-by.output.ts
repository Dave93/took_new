import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { price_type } from './price-type.enum';
import { status } from './status.enum';
import { sale_type } from './sale-type.enum';
import { Float } from '@nestjs/graphql';
import { PostCountAggregate } from './post-count-aggregate.output';
import { PostAvgAggregate } from './post-avg-aggregate.output';
import { PostSumAggregate } from './post-sum-aggregate.output';
import { PostMinAggregate } from './post-min-aggregate.output';
import { PostMaxAggregate } from './post-max-aggregate.output';

@ObjectType()
export class PostGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => price_type, {nullable:false})
    price_type!: keyof typeof price_type;

    @Field(() => status, {nullable:false})
    status!: keyof typeof status;

    @Field(() => sale_type, {nullable:false})
    sale_type!: keyof typeof sale_type;

    @Field(() => Float, {nullable:false})
    latitude!: number;

    @Field(() => Float, {nullable:false})
    longitude!: number;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => Int, {nullable:false})
    comments_count!: number;

    @Field(() => String, {nullable:false})
    city_id!: string;

    @Field(() => PostCountAggregate, {nullable:true})
    _count?: PostCountAggregate;

    @Field(() => PostAvgAggregate, {nullable:true})
    _avg?: PostAvgAggregate;

    @Field(() => PostSumAggregate, {nullable:true})
    _sum?: PostSumAggregate;

    @Field(() => PostMinAggregate, {nullable:true})
    _min?: PostMinAggregate;

    @Field(() => PostMaxAggregate, {nullable:true})
    _max?: PostMaxAggregate;
}
