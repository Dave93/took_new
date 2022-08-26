import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class users_terminalsScalarWhereInput {

    @Field(() => [users_terminalsScalarWhereInput], {nullable:true})
    AND?: Array<users_terminalsScalarWhereInput>;

    @Field(() => [users_terminalsScalarWhereInput], {nullable:true})
    OR?: Array<users_terminalsScalarWhereInput>;

    @Field(() => [users_terminalsScalarWhereInput], {nullable:true})
    NOT?: Array<users_terminalsScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    user_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    terminal_id?: StringFilter;
}
