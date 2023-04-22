import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class scheduled_reports_subscriptionWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;
}
