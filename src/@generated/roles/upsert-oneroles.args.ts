import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { rolesWhereUniqueInput } from './roles-where-unique.input';
import { Type } from 'class-transformer';
import { rolesCreateInput } from './roles-create.input';
import { rolesUpdateInput } from './roles-update.input';

@ArgsType()
export class UpsertOnerolesArgs {

    @Field(() => rolesWhereUniqueInput, {nullable:false})
    @Type(() => rolesWhereUniqueInput)
    where!: rolesWhereUniqueInput;

    @Field(() => rolesCreateInput, {nullable:false})
    @Type(() => rolesCreateInput)
    create!: rolesCreateInput;

    @Field(() => rolesUpdateInput, {nullable:false})
    @Type(() => rolesUpdateInput)
    update!: rolesUpdateInput;
}
