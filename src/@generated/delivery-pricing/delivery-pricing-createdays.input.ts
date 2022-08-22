import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class delivery_pricingCreatedaysInput {

    @Field(() => [String], {nullable:false})
    set!: Array<string>;
}
