import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class users_permissionsAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    permission_id?: keyof typeof SortOrder;
}
