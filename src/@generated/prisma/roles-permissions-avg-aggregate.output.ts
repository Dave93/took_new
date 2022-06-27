import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Roles_permissionsAvgAggregate {

    @Field(() => Float, {nullable:true})
    role_id?: number;

    @Field(() => Float, {nullable:true})
    permission_id?: number;
}
