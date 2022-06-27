import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { migrationsWhereUniqueInput } from './migrations-where-unique.input';
import { Type } from 'class-transformer';
import { migrationsCreateInput } from './migrations-create.input';
import { migrationsUpdateInput } from './migrations-update.input';

@ArgsType()
export class UpsertOnemigrationsArgs {

    @Field(() => migrationsWhereUniqueInput, {nullable:false})
    @Type(() => migrationsWhereUniqueInput)
    where!: migrationsWhereUniqueInput;

    @Field(() => migrationsCreateInput, {nullable:false})
    @Type(() => migrationsCreateInput)
    create!: migrationsCreateInput;

    @Field(() => migrationsUpdateInput, {nullable:false})
    @Type(() => migrationsUpdateInput)
    update!: migrationsUpdateInput;
}
