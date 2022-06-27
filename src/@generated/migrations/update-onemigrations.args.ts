import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { migrationsUpdateInput } from './migrations-update.input';
import { Type } from 'class-transformer';
import { migrationsWhereUniqueInput } from './migrations-where-unique.input';

@ArgsType()
export class UpdateOnemigrationsArgs {

    @Field(() => migrationsUpdateInput, {nullable:false})
    @Type(() => migrationsUpdateInput)
    data!: migrationsUpdateInput;

    @Field(() => migrationsWhereUniqueInput, {nullable:false})
    @Type(() => migrationsWhereUniqueInput)
    where!: migrationsWhereUniqueInput;
}
