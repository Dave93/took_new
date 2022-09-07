import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customersWhereInput } from '../customers/customers-where.input';

@InputType()
export class CustomersRelationFilter {

    @Field(() => customersWhereInput, {nullable:true})
    is?: customersWhereInput;

    @Field(() => customersWhereInput, {nullable:true})
    isNot?: customersWhereInput;
}
