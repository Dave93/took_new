import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Users_rolesAvgAggregate {

    @Field(() => Float, {nullable:true})
    role_id?: number;
}
