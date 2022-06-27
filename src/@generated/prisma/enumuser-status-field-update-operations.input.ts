import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { user_status } from './user-status.enum';

@InputType()
export class Enumuser_statusFieldUpdateOperationsInput {

    @Field(() => user_status, {nullable:true})
    set?: keyof typeof user_status;
}
