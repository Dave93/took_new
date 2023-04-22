import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class scheduled_reportsWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;
}
