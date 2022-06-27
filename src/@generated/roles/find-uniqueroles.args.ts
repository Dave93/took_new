import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { rolesWhereUniqueInput } from './roles-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquerolesArgs {

    @Field(() => rolesWhereUniqueInput, {nullable:false})
    @Type(() => rolesWhereUniqueInput)
    where!: rolesWhereUniqueInput;
}
