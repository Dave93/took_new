import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { permissionsWhereUniqueInput } from './permissions-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquepermissionsArgs {

    @Field(() => permissionsWhereUniqueInput, {nullable:false})
    @Type(() => permissionsWhereUniqueInput)
    where!: permissionsWhereUniqueInput;
}
