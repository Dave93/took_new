import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class work_schedulesCreatedaysInput {

    @Field(() => [String], {nullable:false})
    set!: Array<string>;
}
