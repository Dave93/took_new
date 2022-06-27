import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { type } from './type.enum';

@InputType()
export class EnumtypeFieldUpdateOperationsInput {

    @Field(() => type, {nullable:true})
    set?: keyof typeof type;
}
