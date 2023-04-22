import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class work_schedulesSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    bonus_price?: keyof typeof SortOrder;
}
