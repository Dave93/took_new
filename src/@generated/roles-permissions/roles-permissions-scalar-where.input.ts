import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class roles_permissionsScalarWhereInput {

    @Field(() => [roles_permissionsScalarWhereInput], {nullable:true})
    AND?: Array<roles_permissionsScalarWhereInput>;

    @Field(() => [roles_permissionsScalarWhereInput], {nullable:true})
    OR?: Array<roles_permissionsScalarWhereInput>;

    @Field(() => [roles_permissionsScalarWhereInput], {nullable:true})
    NOT?: Array<roles_permissionsScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    role_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    permission_id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    created_by?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    updated_by?: StringNullableFilter;
}
