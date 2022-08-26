import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { UsersRelationFilter } from '../prisma/users-relation-filter.input';
import { TerminalsRelationFilter } from '../prisma/terminals-relation-filter.input';

@InputType()
export class users_terminalsWhereInput {

    @Field(() => [users_terminalsWhereInput], {nullable:true})
    AND?: Array<users_terminalsWhereInput>;

    @Field(() => [users_terminalsWhereInput], {nullable:true})
    OR?: Array<users_terminalsWhereInput>;

    @Field(() => [users_terminalsWhereInput], {nullable:true})
    NOT?: Array<users_terminalsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    user_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    terminal_id?: StringFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    users?: UsersRelationFilter;

    @Field(() => TerminalsRelationFilter, {nullable:true})
    terminals?: TerminalsRelationFilter;
}
