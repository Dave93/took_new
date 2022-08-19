import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class migrationsUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    timestamp?: bigint | number;

    @Field(() => String, {nullable:true})
    name?: string;
}
