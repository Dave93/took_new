import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { rolesUpdateInput } from './roles-update.input';
import { Type } from 'class-transformer';
import { rolesWhereUniqueInput } from './roles-where-unique.input';

@ArgsType()
export class UpdateOnerolesArgs {

    @Field(() => rolesUpdateInput, {nullable:false})
    @Type(() => rolesUpdateInput)
    data!: rolesUpdateInput;

    @Field(() => rolesWhereUniqueInput, {nullable:false})
    @Type(() => rolesWhereUniqueInput)
    where!: rolesWhereUniqueInput;
}
