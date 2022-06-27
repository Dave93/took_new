import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class roles_permissionsScalarWhereInput {

    @Field(() => [roles_permissionsScalarWhereInput], {nullable:true})
    AND?: Array<roles_permissionsScalarWhereInput>;

    @Field(() => [roles_permissionsScalarWhereInput], {nullable:true})
    OR?: Array<roles_permissionsScalarWhereInput>;

    @Field(() => [roles_permissionsScalarWhereInput], {nullable:true})
    NOT?: Array<roles_permissionsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    role_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    permission_id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    created_by?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    updated_by?: StringNullableFilter;
}
