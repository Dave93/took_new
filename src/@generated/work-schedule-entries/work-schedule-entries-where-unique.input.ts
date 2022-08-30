import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class work_schedule_entriesWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;
}
