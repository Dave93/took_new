import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class delivery_pricingWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;
}
