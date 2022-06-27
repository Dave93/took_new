import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { rolesCreateManyInput } from './roles-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyrolesArgs {

    @Field(() => [rolesCreateManyInput], {nullable:false})
    @Type(() => rolesCreateManyInput)
    data!: Array<rolesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
