import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { terminalsCreateManyInput } from './terminals-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyterminalsArgs {

    @Field(() => [terminalsCreateManyInput], {nullable:false})
    @Type(() => terminalsCreateManyInput)
    data!: Array<terminalsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
