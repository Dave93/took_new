import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Users_permissionsAvgAggregate {

    @Field(() => Float, {nullable:true})
    permission_id?: number;
}
