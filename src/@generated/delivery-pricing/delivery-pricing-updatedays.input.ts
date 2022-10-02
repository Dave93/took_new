import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class delivery_pricingUpdatedaysInput {

    @Field(() => [String], {nullable:true})
    set?: Array<string>;
}
