import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class usersUpdatedoc_filesInput {

    @Field(() => [String], {nullable:true})
    set?: Array<string>;
}
