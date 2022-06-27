import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { permissionsWhereInput } from '../permissions/permissions-where.input';

@InputType()
export class PermissionsRelationFilter {

    @Field(() => permissionsWhereInput, {nullable:true})
    is?: permissionsWhereInput;

    @Field(() => permissionsWhereInput, {nullable:true})
    isNot?: permissionsWhereInput;
}
