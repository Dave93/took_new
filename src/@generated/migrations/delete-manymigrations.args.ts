import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { migrationsWhereInput } from './migrations-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManymigrationsArgs {

    @Field(() => migrationsWhereInput, {nullable:true})
    @Type(() => migrationsWhereInput)
    where?: migrationsWhereInput;
}
