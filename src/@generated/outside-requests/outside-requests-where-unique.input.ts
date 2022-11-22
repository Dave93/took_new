import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class outside_requestsWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;
}
