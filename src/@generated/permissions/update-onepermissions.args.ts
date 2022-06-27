import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { permissionsUpdateInput } from './permissions-update.input';
import { Type } from 'class-transformer';
import { permissionsWhereUniqueInput } from './permissions-where-unique.input';

@ArgsType()
export class UpdateOnepermissionsArgs {

    @Field(() => permissionsUpdateInput, {nullable:false})
    @Type(() => permissionsUpdateInput)
    data!: permissionsUpdateInput;

    @Field(() => permissionsWhereUniqueInput, {nullable:false})
    @Type(() => permissionsWhereUniqueInput)
    where!: permissionsWhereUniqueInput;
}
