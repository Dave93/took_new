import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { sale_type } from './sale-type.enum';

@InputType()
export class Enumsale_typeFieldUpdateOperationsInput {

    @Field(() => sale_type, {nullable:true})
    set?: keyof typeof sale_type;
}
