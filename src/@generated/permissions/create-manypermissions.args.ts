import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { permissionsCreateManyInput } from './permissions-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManypermissionsArgs {

    @Field(() => [permissionsCreateManyInput], {nullable:false})
    @Type(() => permissionsCreateManyInput)
    data!: Array<permissionsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
