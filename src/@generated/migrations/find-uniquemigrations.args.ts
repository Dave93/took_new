import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { migrationsWhereUniqueInput } from './migrations-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquemigrationsArgs {

    @Field(() => migrationsWhereUniqueInput, {nullable:false})
    @Type(() => migrationsWhereUniqueInput)
    where!: migrationsWhereUniqueInput;
}
