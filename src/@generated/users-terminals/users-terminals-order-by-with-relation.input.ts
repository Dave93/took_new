import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { usersOrderByWithRelationInput } from '../users/users-order-by-with-relation.input';
import { terminalsOrderByWithRelationInput } from '../terminals/terminals-order-by-with-relation.input';

@InputType()
export class users_terminalsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    terminal_id?: keyof typeof SortOrder;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    users?: usersOrderByWithRelationInput;

    @Field(() => terminalsOrderByWithRelationInput, {nullable:true})
    terminals?: terminalsOrderByWithRelationInput;
}
