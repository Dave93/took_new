import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class OrganizationAvgAggregate {

    @Field(() => Float, {nullable:true})
    max_distance?: number;

    @Field(() => Float, {nullable:true})
    max_active_order_count?: number;

    @Field(() => Float, {nullable:true})
    max_order_close_distance?: number;
}
