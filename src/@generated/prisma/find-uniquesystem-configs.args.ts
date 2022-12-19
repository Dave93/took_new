import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { system_configsWhereUniqueInput } from '../system-configs/system-configs-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquesystemConfigsArgs {

    @Field(() => system_configsWhereUniqueInput, {nullable:false})
    @Type(() => system_configsWhereUniqueInput)
    where!: system_configsWhereUniqueInput;
}
