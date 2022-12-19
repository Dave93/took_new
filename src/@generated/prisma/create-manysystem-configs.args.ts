import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { system_configsCreateManyInput } from '../system-configs/system-configs-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManysystemConfigsArgs {

    @Field(() => [system_configsCreateManyInput], {nullable:false})
    @Type(() => system_configsCreateManyInput)
    data!: Array<system_configsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
