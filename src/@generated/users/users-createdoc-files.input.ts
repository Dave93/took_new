import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class usersCreatedoc_filesInput {

    @Field(() => [String], {nullable:false})
    set!: Array<string>;
}
