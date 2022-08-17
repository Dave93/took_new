import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class migrationsSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    timestamp?: keyof typeof SortOrder;
}
