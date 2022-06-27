import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Users_permissionsSumAggregate {

    @Field(() => Int, {nullable:true})
    permission_id?: number;
}
