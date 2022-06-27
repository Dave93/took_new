import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { permissionsWhereInput } from './permissions-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManypermissionsArgs {

    @Field(() => permissionsWhereInput, {nullable:true})
    @Type(() => permissionsWhereInput)
    where?: permissionsWhereInput;
}
