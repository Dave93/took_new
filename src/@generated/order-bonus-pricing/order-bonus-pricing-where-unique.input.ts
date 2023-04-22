import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class order_bonus_pricingWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;
}
