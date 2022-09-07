import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class customers_commentsWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;
}
