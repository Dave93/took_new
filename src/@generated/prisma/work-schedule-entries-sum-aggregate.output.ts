import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Work_schedule_entriesSumAggregate {

    @Field(() => Int, {nullable:true})
    duration?: number;

    @Field(() => Float, {nullable:true})
    lat_open?: number;

    @Field(() => Float, {nullable:true})
    lat_close?: number;

    @Field(() => Float, {nullable:true})
    lon_open?: number;

    @Field(() => Float, {nullable:true})
    lon_close?: number;
}
