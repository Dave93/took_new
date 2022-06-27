import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class users_rolesScalarWhereInput {

    @Field(() => [users_rolesScalarWhereInput], {nullable:true})
    AND?: Array<users_rolesScalarWhereInput>;

    @Field(() => [users_rolesScalarWhereInput], {nullable:true})
    OR?: Array<users_rolesScalarWhereInput>;

    @Field(() => [users_rolesScalarWhereInput], {nullable:true})
    NOT?: Array<users_rolesScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    user_id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    role_id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    created_by?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    updated_by?: StringNullableFilter;
}
