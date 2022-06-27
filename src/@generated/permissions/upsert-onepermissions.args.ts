import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { permissionsWhereUniqueInput } from './permissions-where-unique.input';
import { Type } from 'class-transformer';
import { permissionsCreateInput } from './permissions-create.input';
import { permissionsUpdateInput } from './permissions-update.input';

@ArgsType()
export class UpsertOnepermissionsArgs {

    @Field(() => permissionsWhereUniqueInput, {nullable:false})
    @Type(() => permissionsWhereUniqueInput)
    where!: permissionsWhereUniqueInput;

    @Field(() => permissionsCreateInput, {nullable:false})
    @Type(() => permissionsCreateInput)
    create!: permissionsCreateInput;

    @Field(() => permissionsUpdateInput, {nullable:false})
    @Type(() => permissionsUpdateInput)
    update!: permissionsUpdateInput;
}
