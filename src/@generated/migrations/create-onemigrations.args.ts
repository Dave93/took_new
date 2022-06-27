import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { migrationsCreateInput } from './migrations-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnemigrationsArgs {

    @Field(() => migrationsCreateInput, {nullable:false})
    @Type(() => migrationsCreateInput)
    data!: migrationsCreateInput;
}
