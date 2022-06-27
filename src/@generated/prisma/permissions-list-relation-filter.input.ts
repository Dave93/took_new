import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { permissionsWhereInput } from '../permissions/permissions-where.input';

@InputType()
export class PermissionsListRelationFilter {

    @Field(() => permissionsWhereInput, {nullable:true})
    every?: permissionsWhereInput;

    @Field(() => permissionsWhereInput, {nullable:true})
    some?: permissionsWhereInput;

    @Field(() => permissionsWhereInput, {nullable:true})
    none?: permissionsWhereInput;
}
