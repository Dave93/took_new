import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { status } from './status.enum';

@InputType()
export class EnumstatusFieldUpdateOperationsInput {

    @Field(() => status, {nullable:true})
    set?: keyof typeof status;
}
