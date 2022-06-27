import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { price_type } from './price-type.enum';

@InputType()
export class Enumprice_typeFieldUpdateOperationsInput {

    @Field(() => price_type, {nullable:true})
    set?: keyof typeof price_type;
}
