import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class order_votesWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;
}
