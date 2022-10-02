import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class work_schedulesUpdatedaysInput {

    @Field(() => [String], {nullable:true})
    set?: Array<string>;
}
